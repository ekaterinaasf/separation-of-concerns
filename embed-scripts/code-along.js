{
  const configSchema = {
    container: 'string, element, empty',
    title: 'string, to become a main header',
    source: 'undefined -> empty code-along. string -> fetch from relative path. object -> name & path. array of strings or objects -> tabbed the-previous-things'
  }

  const resultSchema = {
    config: 'the unmodified config object',
    container: "element with input & output containers",
    editor: 'ace editor',
    resultsEl: 'coupler',
    active: "the active step object",
    steps: {
      type: 'array',
      description: 'if no steps, empty editor/results. if 1 step, no tabs. if 2+ steps, tab-it',
      items: {
        path: "relative path to file",
        code: "the code",
        session: "ace session",
        results: "element with name & most recent evaluation",
        button: "the button that goes up top",
        name: "given or default name "
      }
    }
  }
}


async function codeAlong(config) {

  const container = (() => {
    if (!config) {
      return document.createElement('div');

    } if (config instanceof Element) {
      return config;

    } else if (typeof config === 'string') {
      return document.getElementById(config);

    } else if (!config.container) {
      return document.createElement('div');

    } else if (config.container instanceof Element) {
      return config.container;

    } else if (typeof config.container === 'string') {
      return document.getElementById(config.container);

    } else {
      throw new Error('unknown container');
    }
  })();

  const steps = await (async () => {
    if (!config || !config.source) return [];

    const fetchSource = async path => {
      try {
        const res = await fetch(path);
        const code = res.text();
        return code;
      } catch (err) {
        return err.name + ": " + err.message;
      }
    }

    if (typeof config.source === 'string') {
      const code = await fetchSource(config.source);
      return [{
        code,
        path: config.source,
        name: config.name || 'code-along'
      }];
    } else if (Array.isArray(config.source)) {
      const fetched = config.source
        .map((path, ind) => {
          if (typeof path === 'string') {
            return {
              path,
              code: fetchSource(path),
              name: 'step ' + ind
            }
          } else if (path.constructor.name === "Object") {
            return {
              path,
              code: fetchSource(path.path),
              name: path.name || 'step ' + ind
            }
          } else {
            throw new Error('invalid step');
          }
        })
      for (let step of fetched) {
        step.code = await step.code;
      }
      return fetched;
    }
  })();


  // { iframe  }
  const setup = await codeAlong.setup(steps, config.title);
  container.appendChild(setup);


  return { steps, container };



  // return {
  //   config,
  //   container,
  //   editor: setup.editor,
  //   resultsEl,
  //   steps
  // };

}

codeAlong.setup = async (steps, title) => {

  const result = {};

  const iframe = document.createElement('iframe');
  iframe.style = 'height:90vh;width:100%;overflow:hidden;background-color:white;';
  // iframe.setAttribute('scrolling', 'no');
  result.iframe = iframe;

  iframe.onload = async () => {

    await new Promise((resolve, reject) => {
      const aceScript = document.createElement('script');
      aceScript.src = "../embed-scripts/ace/ace.js";
      aceScript.type = "text/javascript";
      aceScript.charset = "utf-8";

      aceScript.addEventListener('load', () => resolve());
      aceScript.addEventListener('error', (e) => reject(e.message))

      iframe.contentDocument.head.appendChild(aceScript);
    });


    const stepsContainer = document.createElement('div');

    const editorContainer = document.createElement('div');
    editorContainer.style = 'height:100vh;width:60vw;';

    const ace = iframe.contentWindow.ace;
    const editor = ace.edit(editorContainer);
    editor.setTheme('ace/theme/twilight');
    editor.setFontSize(12);
    editor.getSession().setMode('ace/mode/javascript');
    editor.getSession().setTabSize(2);


    if (steps.length === 0) {
      const defaultCode = "// https://developer.mozilla.org/en-US/docs/Web/API/Console/assert\n" +
        "console.assert(true, 'passing assert');\n" +
        "console.assert(false, 'failing assert');\n" +
        "\n// psst. Open your console for logging!";
      steps.push({
        code: defaultCode,
        name: 'default'
      })
    };

    steps.forEach(step => {
      step.session = ace.createEditSession(step.code, 'javascript');
      step.session.setMode('ace/mode/javascript');
    });

    const resultsContainer = document.createElement('div');

    const stepButtons = steps.map((step, index) => {
      const button = document.createElement('button');
      const name = step.name ? step.name : 'step ' + index;
      button.innerHTML = name;
      // clear the results when tabs are switched
      //  avoid students changing code but not evaluating, switching tabs, then back and not remembering the results are out of date, then being confused by the wrong results.
      // step.results = document.createElement('div');
      button.onclick = () => {

        active = step;
        // console.clear();
        stepButtons.forEach(stepButton => {
          stepButton.innerHTML = stepButton.innerHTML
            .replace('---&gt; ', '')
            .replace(' &lt;---', '');
        })
        button.innerHTML = '---> ' + button.innerHTML + ' <---';

        editor.setSession(step.session);

        resultsContainer.innerHTML = '';
        // resultsContainer.appendChild(active.results)

      }
      step.button = button;
      return button;
    });

    if (steps.length > 0) {
      const buttonsContainer = steps
        .reduce((div, step) => {
          div.appendChild(step.button);
          return div;
        }, document.createElement('div'));
      stepsContainer.appendChild(buttonsContainer)
    }

    stepsContainer.appendChild(editorContainer);

    steps[0].button.click()

    editor.setValue(steps[0].code);

    const evaluate = document.createElement('button');
    evaluate.innerHTML = 'evaluate assertions';
    evaluate.addEventListener('click', function evaluationHandler() {
      resultsContainer.innerHTML = '';
      const results = codeAlong.evaluate(editor.getValue());
      // active.results = results;
      resultsContainer.appendChild(results);
    });

    const jsTutorButton = document.createElement('button');
    jsTutorButton.innerHTML = 'open in JS Tutor';
    jsTutorButton.onclick = () => {
      const encodedJST = encodeURIComponent(editor.getValue());
      const sanitizedJST = encodedJST
        .replace(/\(/g, '%28').replace(/\)/g, '%29')
        .replace(/%09/g, '%20%20');
      const jsTutorURL = "http://www.pythontutor.com/live.html#code=" + sanitizedJST + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
      window.open(jsTutorURL, '_blank');
    };

    {/* build parsonizer button
        const parsonizerButton = document.createElement('button');
        parsonizerButton.innerHTML = 'Parsonzier';
        parsonizerButton.onclick = () => {
          const encoded = encodeURIComponent(editor.getValue());
          const sanitized = encoded
            .replace(/\(/g, '%28').replace(/\)/g, '%29')
            .replace(/%09/g, '%20%20');
          const parsonsURL = "http://janke-learning.org/parsonizer/?snippet=" + sanitized;
          window.open(parsonsURL, '_blank');
        }
      */}

    const buttonDiv = document.createElement('div');
    buttonDiv.style = 'margin-top:2%;margin-bottom:2%;text-align:center;';
    buttonDiv.appendChild(jsTutorButton);
    buttonDiv.appendChild(evaluate);
    // buttonDiv.appendChild(parsonizerButton);


    resultsContainer.id = '\n-- assertions --\n';


    const initialResult = document.createElement('pre');
    initialResult.innerHTML = `
Psst. open your console for logs and errors
    `;
    resultsContainer.appendChild(initialResult);

    const outputContainer = document.createElement('div');
    outputContainer.style = 'height: 100vh; width: 40vw; border:solid 1px; padding-left:3%; padding-right:3%;';
    if (typeof title === 'string') {
      const titleEl = document.createElement('h3');
      titleEl.innerHTML = title;
      titleEl.style = 'text-align: center;';
      outputContainer.appendChild(titleEl);
    }
    outputContainer.appendChild(buttonDiv);
    outputContainer.appendChild(document.createElement('hr'));
    outputContainer.appendChild(resultsContainer);


    iframe.contentDocument.body.style = 'display:flex; flex-direction:row;';
    iframe.contentDocument.body.appendChild(outputContainer);
    iframe.contentDocument.body.appendChild(stepsContainer);

  }

  return iframe;

}

codeAlong.evaluate = (src) => {
  const resultsEl = document.createElement('ol');
  // console.clear();

  const nativeAssert = console.assert;
  console.assert = function () {

    nativeAssert(...Array.from(arguments));

    const statusString = arguments[0] ? 'PASS: ' : 'FAIL: ';
    const statusEl = document.createElement('p');
    statusEl.innerHTML = statusString;
    statusEl.style.display = 'inline';
    // revisit color choices
    statusEl.style.color = arguments[0] ? 'green' : 'orange';

    const messages = document.createElement('code');
    messages.innerHTML = '  ' + Array.from(arguments)
      .slice(1, arguments.length)
      .toString()
      .replace(',', ', ');

    const newLi = document.createElement('li');
    newLi.appendChild(statusEl);
    newLi.appendChild(messages);

    resultsEl.appendChild(newLi);

  }

  try {
    // const toEval = editor.getValue();
    const loopDetected = codeAlong.infiniteLoopDetector.wrap(src);
    const toEval = '(function editor() {' + loopDetected + '})();';
    eval(toEval);
  } catch (err) {
    const errorEl = document.createElement('pre');
    errorEl.style.color = "red";
    // errorEl.innerHTML = err.stack;
    errorEl.innerHTML = err.name + ': ' + err.message + '\n\n   (callstack is logged to the console)';
    resultsEl.appendChild(errorEl);
    console.error(err);
  }

  console.assert = nativeAssert;
  // console.log = nativeLog;

  return resultsEl;

}


codeAlong.infiniteLoopDetector = (() => {
  // https://github.com/xieranmaya/infinite-loop-detector
  // refactored to work with iterations instead of time

  // define an InfiniteLoopError class
  function InfiniteLoopError(msg, type) {
    Error.call(this, msg)
    this.type = 'InfiniteLoopError'
  }

  function infiniteLoopDetector(iterations) {
    if (iterations > 100) { // 非首次执行，此处可以优化，性能太低
      throw new Error('Loop ran for over 100 iterations!', 'InfiniteLoopError')
    }
  }

  infiniteLoopDetector.wrap = function (codeStr) {
    if (typeof codeStr !== 'string') {
      throw new Error('Can only wrap code represented by string, not any other thing at the time! If you want to wrap a function, convert it to string first.')
    }
    // this is not a strong regex, but enough to use at the time
    // wraps in block to avoid redeclaring variables between attempts
    //  uses block instead of iife to preserve line number in error read-out
    //  and keep simpler callstack for students
    return '{' + codeStr.replace(/for *\(.*\{|while *\(.*\{|do *\{/g, function (loopHead) {
      var id = parseInt(Math.random() * Number.MAX_SAFE_INTEGER) // not guaranteed unique, but good enough
      return `let __${id} = 0;${loopHead}codeAlong.infiniteLoopDetector(++__${id});`
    }) + '\n}';
  }

  infiniteLoopDetector.unwrap = function (codeStr) {
    const deInsided = codeStr.replace(/codeAlong.infiniteLoopDetector\([0-9]*?\) = 0;/g, '');
    return deInsided.replace(/let __\([0-9]*?\)/g, '');
  }

  return infiniteLoopDetector
})()
