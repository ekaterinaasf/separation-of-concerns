{
  const configSchema = {
    container: 'string, element, empty',
    type: 'string, what kind of code-along to render.  javascript/js or document for now',
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
  const setup = await codeAlong.setup(steps, config);
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

codeAlong.setup = async (steps, config) => {

  const result = {};

  const iframe = document.createElement('iframe');
  iframe.style = 'height:93vh;width:100%;overflow:hidden;background-color:white;';
  iframe.setAttribute('scrolling', 'no');
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

    // async total side-effect
    if (config.type === 'document') {
      codeAlong.document(iframe, steps, config);
    } else if (config.type === 'js' || config.type === 'javascript') {
      codeAlong.js(iframe, steps, config);
    } else {
      codeAlong.js(iframe, steps, config);
    }

  }

  return iframe;

}

codeAlong.document = (iframe, steps, config) => {
  const title = config.title;

  const stepsContainer = document.createElement('div');

  const editorContainer = document.createElement('div');
  editorContainer.style = 'height:98vh;width:55vw;';

  const ace = iframe.contentWindow.ace;
  const editor = ace.edit(editorContainer);
  // editor.setTheme('ace/theme/iplastic'); // lack of color outweighs yellow open/close
  // editor.setTheme('ace/theme/dawn');
  // editor.setTheme('ace/theme/eclipse');
  editor.setTheme('ace/theme/chrome');
  editor.setFontSize(12);
  editor.getSession().setMode('ace/mode/html');
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
    step.session = ace.createEditSession(step.code, 'html');
    step.session.setMode('ace/mode/html');
  });

  if (steps.length > 1) {
    editorContainer.style = 'height:92vh;width:55vw;';
    const stepButtons = steps.map((step, index) => {
      const button = document.createElement('button');
      button.style.height = '30px'; // provisoire
      button.style.background = '';
      const name = step.name ? step.name : 'step ' + index;
      button.innerHTML = name;
      // clear the results when tabs are switched
      //  avoid students changing code but not evaluating, switching tabs, then back and not remembering the results are out of date, then being confused by the wrong results.
      // step.results = document.createElement('div');
      button.onclick = () => {

        active = step;
        // console.clear();
        stepButtons.forEach(stepButton => {
          // stepButton.innerHTML = stepButton.innerHTML
          //   .replace('===&gt; ', '')
          //   .replace(' &lt;===', '');
          stepButton.style.background = '';
        })
        // button.innerHTML = '===> ' + button.innerHTML + ' <===';
        button.style.background = 'darkgrey';

        editor.setSession(step.session);
        outputEl.src = "data:text/html;charset=utf-8," + encodeURIComponent(editor.getValue());

      }
      step.button = button;
      return button;
    });

    const buttonsContainer = steps
      .reduce((div, step) => {
        div.appendChild(step.button);
        return div;
      }, document.createElement('div'));
    stepsContainer.appendChild(buttonsContainer);

    // steps[0].button.innerHTML = '===> ' + steps[0].name + ' <===';
    steps[0].button.style.background = 'darkgrey';
  }

  stepsContainer.appendChild(editorContainer);

  editor.setSession(steps[0].session);
  editor.setValue(steps[0].code);

  const hixieButton = document.createElement('button');
  hixieButton.innerHTML = 'study in Live DOM Viewer';
  hixieButton.onclick = () => {
    const encodedHTML = encodeURIComponent(editor.getValue());
    const url = "https://software.hixie.ch/utilities/js/live-dom-viewer/?" + encodedHTML;
    window.open(url, "_blank");
  };

  const newTabButton = document.createElement('button');
  newTabButton.innerHTML = 'inspect/debug in new tab';
  newTabButton.onclick = () => {
    const x = window.open();
    x.document.open();
    x.document.write(editor.getValue());
    x.document.close();
  }


  const buttonDiv = document.createElement('div');
  buttonDiv.style = 'margin-top:2%;margin-bottom:2%;text-align:center;';
  buttonDiv.appendChild(newTabButton);
  buttonDiv.appendChild(hixieButton);


  const outputEl = document.createElement('iframe');
  // can do better than this
  config.title
    ? outputEl.style = "width:100%;height:85%;"
    : outputEl.style = "width:100%;height:90%;";
  outputEl.id = '\n-- study: rendered DOM --\n';
  outputEl.src = "data:text/html;charset=utf-8," + encodeURIComponent(steps[0].code);

  const outputContainer = document.createElement('div');
  outputContainer.style = 'height: 98vh; width: 40vw; border:solid 1px; padding-left:1%; padding-right:1%;';
  if (typeof title === 'string') {
    const titleEl = document.createElement('h1');
    titleEl.innerHTML = title;
    titleEl.style = 'text-align: center; margin-bottom:0%; margin-top:1%;';
    outputContainer.appendChild(titleEl);
  }
  outputContainer.appendChild(buttonDiv);
  outputContainer.appendChild(outputEl);

  editor.on("change", (e) => {
    outputEl.src = "data:text/html;charset=utf-8," + encodeURIComponent(editor.getValue());
  });


  iframe.contentDocument.body.style = 'display:flex; flex-direction:row;';
  iframe.contentDocument.body.appendChild(stepsContainer);
  iframe.contentDocument.body.appendChild(outputContainer);

}

codeAlong.js = (iframe, steps, config) => {

  const title = config.title;

  const stepsContainer = document.createElement('div');

  const editorContainer = document.createElement('div');
  editorContainer.style = 'height:98vh;width:55vw;';

  const ace = iframe.contentWindow.ace;
  const editor = ace.edit(editorContainer);
  editor.setTheme('ace/theme/chrome');
  // editor.setTheme('ace/theme/dawn');
  // editor.setTheme('ace/theme/eclipse');
  // editor.setTheme('ace/theme/iplastic'); // weaker coloring, but open/close are highlighted bright yellow
  // editor.setTheme('ace/theme/kuroir');
  // editor.setTheme('ace/theme/tomorrow');
  // editor.setTheme('ace/theme/xcode');
  editor.setFontSize(12);
  editor.getSession().setMode('ace/mode/javascript');
  editor.getSession().setTabSize(2);


  if (steps.length === 0) {
    const defaultCode = "// https://developer.mozilla.org/en-US/docs/Web/API/Console/assert\n" +
      "console.assert(true, 'passing assert');\n" +
      "console.assert(false, 'failing assert');\n"; // +
    // "\n// psst. Open your console for logging!";
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


  if (steps.length > 1) {
    editorContainer.style = 'height:90vh;width:55vw;';
    const stepButtons = steps.map((step, index) => {
      const button = document.createElement('button');
      button.style = 'height:35px;';
      const name = step.name ? step.name : 'step ' + index;
      // to preserve formatting in step title
      const code = document.createElement('code');
      code.innerHTML = name;
      button.appendChild(code);
      // clear the results when tabs are switched
      //  avoid students changing code but not evaluating, switching tabs, then back and not remembering the results are out of date, then being confused by the wrong results.
      // step.results = document.createElement('div');
      button.onclick = () => {

        active = step;
        // console.clear();
        stepButtons.forEach(stepButton => {
          // stepButton.firstChild.innerHTML = stepButton.firstChild.innerHTML
          //   .replace('==&gt; ', '')
          //   .replace(' &lt;==', '');
          stepButton.style.background = '';
        })
        // button.firstChild.innerHTML = '==> ' + button.firstChild.innerHTML + ' <==';
        button.style.background = 'darkgrey';

        editor.setSession(step.session);

        resultsContainer.innerHTML = '';
        // resultsContainer.appendChild(active.results)

      }
      step.button = button;
      return button;
    });

    const buttonsContainer = steps
      .reduce((div, step) => {
        div.appendChild(step.button);
        return div;
      }, document.createElement('div'));
    buttonsContainer.style = 'padding-bottom:1%';
    stepsContainer.appendChild(buttonsContainer);

    // steps[0].button.firstChild.innerHTML = '==> ' + steps[0].name + ' <==';
    steps[0].button.style.background = 'darkgrey';
  }

  stepsContainer.appendChild(editorContainer);

  editor.setSession(steps[0].session);

  editor.setValue(steps[0].code);

  const evaluate = document.createElement('button');
  evaluate.innerHTML = 'evaluate code';
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
    // const jsTutorURL = "http://www.pythontutor.com/live.html#code=" + sanitizedJST + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
    const jsTutorURL = "http://www.pythontutor.com/javascript.html#code=" + sanitizedJST + "&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D";
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
  buttonDiv.appendChild(evaluate);
  try {
    // prettier.format;
    js_beautify;

    const formatCode = document.createElement('button');
    formatCode.innerHTML = 'format code';
    formatCode.addEventListener('click', () => {
      editor.setValue(js_beautify(editor.getValue(), {
        indent_size: 2,
        "brace_style": "collapse,preserve-inline",
      }))
      // editor.setValue(
      //   prettier.format(
      //     editor.getValue(),
      //     {
      //       parser: "babel",
      //       plugins: prettierPlugins
      //     }
      //   )
      // )
    });
    buttonDiv.appendChild(formatCode);
  } catch (e) { }
  buttonDiv.appendChild(jsTutorButton);
  // buttonDiv.appendChild(parsonizerButton);


  resultsContainer.id = '\n-- assertions --\n';


  const initialResult = document.createElement('pre');
  //     initialResult.innerHTML = `
  // Psst. open your console for logs and errors
  //     `;
  resultsContainer.appendChild(initialResult);

  const outputContainer = document.createElement('div');
  outputContainer.style = 'height: 98vh; width: 55vw; border:solid 1px;';
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
  iframe.contentDocument.body.appendChild(stepsContainer);
  iframe.contentDocument.body.appendChild(outputContainer);

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
    newLi.style = 'padding-top:1%;'
    newLi.appendChild(statusEl);
    newLi.appendChild(messages);

    resultsEl.appendChild(newLi);

  }

  const renderError = (err) => {
    const errorEl = document.createElement('pre');
    errorEl.style.color = "red";
    errorEl.innerHTML = err.name + ': ' + err.message + '\n\n   callstack is logged to the console';
    return errorEl;
  }
  const renderHaltingWarning = (err) => {
    const warningEl = document.createElement('pre');
    warningEl.style.color = "#ff6f3f";
    warningEl.innerHTML = 'Warning: ' + err.message + '\n\n   callstack is logged to the console';
    return warningEl;
  }
  const renderPhase = didExecute => {
    const phaseEl = document.createElement('pre');
    const phase = didExecute ? 'Execution Phase' : "Creation Phase"
    phaseEl.innerHTML = '   caught during ' + phase;
    return phaseEl;
  }

  let didExecute = false;
  try {
    const loopDetected = codeAlong.haltingDetector.wrap(src);
    const toEval = '(function editor() {didExecute = true;' + loopDetected + '})();';
    eval(toEval);
  } catch (err) {
    const errOrWarning = err.message === 'Loop exceeded 1000 iterations'
      ? renderHaltingWarning(err)
      : renderError(err);
    resultsEl.appendChild(errOrWarning);
    resultsEl.appendChild(renderPhase(didExecute));
    console.error(err);
  }

  console.assert = nativeAssert;
  // console.log = nativeLog;

  return resultsEl;

}


codeAlong.haltingDetector = (() => {
  // https://github.com/xieranmaya/infinite-loop-detector
  // refactored to work with iterations instead of time


  // define an haltingError class
  class HaltingError extends Error {
    constructor(message) {
      super(message);
      this.name = "HaltingError";
    }
  }


  haltingDetector = (iterations) => {
    if (iterations > 1000) {
      throw new HaltingError('Loop exceeded 1000 iterations');
    }
  }


  // // not needed, browsers already catch excessive callstacks
  // haltingDetector.recursionDetector = (recursions) => {
  //   if (recursions > 1000) {
  //     throw new HaltingError('Function exceeded 1000 internal calls');
  //   }
  // }

  haltingDetector.wrap = function (codeStr) {
    if (typeof codeStr !== 'string') {
      throw new Error('Can only wrap code represented by string, not any other thing at the time! If you want to wrap a function, convert it to string first.')
    }
    // this is not a strong regex, but enough to use at the time
    // wraps in block to avoid redeclaring variables between attempts
    //  uses block instead of iife to preserve line number in error read-out
    //  and keep simpler callstack for students
    const loopChecked = codeStr.replace(/for *\(.*\{|while *\(.*\{|do *\{/g, loopHead => {
      const id = parseInt(Math.random() * Number.MAX_SAFE_INTEGER) // not guaranteed unique, but good enough
      return `let __${id} = 0;${loopHead}if (++__${id} > 1000) throw new Error('Loop exceeded 1000 iterations');`
    });
    return loopChecked;
    // const recursionChecked = loopChecked.replace(/for *\(.*\{|while *\(.*\{|do *\{/g, loopHead => {
    //   const id = parseInt(Math.random() * Number.MAX_SAFE_INTEGER) // not guaranteed unique, but good enough
    //   return `let __${id} = 0;${loopHead}codeAlong.haltingDetector.recursionDetector(++__${id});`
    // });
    // return recursionChecked;
  }

  haltingDetector.unwrap = function (codeStr) { }

  return haltingDetector
})();
