# Week 2: `debugger`

This week you should focus on using different techniques to pause and step through your code.  JS Tutor is an outstanding tool to study and learn JavaScript in isolation. You should be using it every hour of every day! Even after graduating HYF and beginning your professional experience, JS Tutor will still be a useful tool for learning and debugging. But it is limited to studying JavaScript in isolated snippets.

To step through and debug your code while it is integrated into your weekly projects, you will need to learn how to use the browser's debugging tools.  This includes: the `debugger` statement, _break points_, step buttons, hovering values, and the memory panel.  Your DevTools' debugger is a complicated tool.  There is _a lot_ of information and _so many_ buttons, it will take time before you are comfortable using it.  But without practice you'll never get there! So start soon and practice often, your future self will thank you.

* [Prep Work](#prep-work)
* [Lesson Plan](#lesson-plan)
* [Assignments](#assignments)

---

## Prep Work

### Sunday Lesson Plan

Study the [Sunday lesson plan](https://hackyourfuture.be/separation-of-concerns/week-2) so you come prepared. It's not possible to learn everything in 4 hours, the more prepared you are the more you will benefit from class!

### DevTools Debugger

* [Step-by-Step intro](https://javascript.info/debugging-chrome)
* [the `debugger` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
* [in Chrome/ium](https://developers.google.com/web/tools/chrome-devtools/javascript/)
* [in FireFox](https://www.youtube.com/watch?v=sK8KU8oiF8s)

### Isolating JavaScript

* Type Conversions: [javascript.info/type-conversions](https://javascript.info/type-conversions)
* Operators & Comparisons: [javascript.info/operators](https://javascript.info/operators), [javascript.info/comparison](https://javascript.info/comparison)
* Truthiness: [janke-learning/truthiness](https://github.com/janke-learning/truthiness)
* Loops: [javascript.info/while-for](https://javascript.info/while-for) and complete the tasks

### Integrating JavaScript

* Browser Events: [javascript.info/introduction-browser-events](https://javascript.info/introduction-browser-events)
* UI Events: [javascript.info/mouse-events-basics](https://javascript.info/mouse-events-basics)

---

## Lesson Plan

* [Slide show is right here](https://hackyourfuture.be/separation-of-concerns/week-2) - Be sure to look over the slides before coming in on Sunday!

---

## Assignments

This week there is 1 project, and 4 exercise sets.

### Project: `rock-paper-scissors-refactor`

> [Starter Code](http://hackyourfuture.be/homework-submission/#projects)

This week's project is to build a rock-paper-scissors game based of the calculator tutorial by Traversy Media.  His tutorial will explain how to build a game that reads and writes directly from the DOM using one JavaScript file.  Your task will be to refactor the code from his tutorial into multiple files:

* `index.html`: define the structure of the user interface using HTML.  import all necessary styles and scripts
* `style.css`: define the styles for your user interface
* `scripts/listener.js`: attach an event to the user interface to respond to user interactions
* `scripts/handler.js`: the callback to your event listener that reads user input, transforms it, and communicates the result.  You will need to refactor this to read user input from the _event_ argument instead of _document._ as in the tutorial. And you will need to refactor the core math logic into ...
* `scripts/logic.js`: contains the core logic of your application, the code that takes user input as an argument and returns the main result of your program.  This file has several tests already written, you will need to write several more tests for practice.

This week's project only has 1 user story ("a user can play rock-paper-scissors").  As before you will be expected to build your project using branches, but this week's branches will be based on _files_ instead of _user stories_.  You should have one branch for each of the files above, merged into master, in that order.  If we check out any of your branches they should be fully working.  To get an idea of what this means, take a look through [using-user-input/stepped-madlibs](https://github.com/hackyourfuturebelgium/using-user-input/blob/master/stepped-madlibs) or this week's lesson plan.

Your completed project repository must contain:

* A README describing your project in detail.  Check out these articles to learn more about writing good README's: [makeareadme.com](https://www.makeareadme.com/), [bulldogjob](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project), [meakaakka](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)
* One well-named branch per step. If we check out any branch, it should contain _only_ the code necessary to make that step work. and it should work! Please name your branches `DOM`, `styles`, `listener`, `handler`, and `logic`.
* A file called `development-strategy.md` in which you explain how you broke this project into separate pieces, and describe what code you wrote to implement each piece.  Check out the [using-user-input](https://github.com/hackyourfuturebelgium/using-user-input) for examples.
* Include your _wireframe_ in the `development-strategy.md` along with a little explanation of why you designed the user interface like you did.  You can either include a link if you use [wireframe.cc](https://wireframe.cc), or upload an image if you use another tool.

What are you waiting for, get coding!

1. Set up your [Homework Issue](https://github.com/HackYourFutureBelgium/homework-submission#homework-issues) on this module's project board
1. Study & complete [this tutorial by Traversy Media](https://www.youtube.com/watch?v=WR_pWXJZiRY)
1. Fork the [rock-paper-scissors-refactor starter code](https://github.com/hackyourfuturebelgium/rock-paper-scissors-refactor)
1. Refactor the code from the tutorial into your fork of `rock-paper-scissors-refactor`
1. Move your issue into "READY FOR REVIEW"!

### Exercises

There are 4 sets of exercises to start this week:

* Fork [using-user-input](https://github.com/hackyourfuturebelgium/using-user-input)
  * Turn on GitHub Pages
  * Complete `2-fix-the-bugs` and `3-develop-from-specs`
  * Push your work regularly, so you can ask questions with issues!
* Continue the FreeCodeCamp JavaScript exercises
  * Sign into FreeCodeCamp using your GitHub Account
  * Turn on your Public Profile
  * Complete [Basic JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/) up through [Iterate with JS do ... while loops](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-do...while-loops)
  * Copy-paste each and every exercise into [JS Tutor](http://pythontutor.com/javascript.html#mode=edit) to get the most out of your studying!
* Study the [_Debugging_ challenges](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/) from FreeCodeCamp
  * Copy-paste each and every exercise into [JS Tutor](http://pythontutor.com/javascript.html#mode=edit) to get the most out of your studying!
* Continue studying the exercises from in class
  * You can study them live [in the lesson plan](https://hackyourfuture.be/separation-of-concerns/week-2)
  * There are example projects to study in [example-projects](../example-projects).  Don't forget to practice with the Debugger!
  * Feeling motivated? You can clone this repository and try run [the JS exercise source files](../javascript-basics) in Node.js.  Either way, study the exercises in [JS Tutor](http://pythontutor.com/javascript.html#mode=edit) and practice them until you can code them with your eyes closed.

Looking for an extra challenge? Try solving each exercise on a different branch!

---
---

### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100" alt="Hack Your Future: Belgium"></a>
