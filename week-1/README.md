# Week 1

* [Prep Work](#prep-work)
* [Lesson Plan](#lesson-plan)
* [Assignments](#assignments)

---

## Prep Work

### What is JavaScript?

* [Andrew Mosh](https://www.youtube.com/watch?v=upDLs1sn7g4)
* [Code School](https://www.youtube.com/watch?v=nItSSTwBvSU)
* [MDN: First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
* [MDN: JS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [javascript.info](https://javascript.info/intro)

### Write some Code

* [Including JS in HTML](https://www.youtube.com/watch?v=AD5hxsFJc4o&list=PL0eyrZgxdwhxNGMWROnaY35NLyEjTqcgB&index=4)
* [Using JS DevTools](https://www.youtube.com/watch?v=sjmyfwESv1g&list=PL0eyrZgxdwhxNGMWROnaY35NLyEjTqcgB&index=5)
* [Rules for writing JS](https://www.youtube.com/watch?v=FdlBtidhAnE&list=PL0eyrZgxdwhxNGMWROnaY35NLyEjTqcgB&index=6)
* Start [learnjavascript.online](https://learnjavascript.online/) through __2. Strings__


---

## Lesson Plan

* [Slide show is right here](https://hackyourfuture.be/separation-of-concerns/week-1)

---

## Assignments

This week there is 1 project, and 2 exercise sets.

### Project

> [Starter Code](http://hackyourfuture.be/homework-submission/#projects)

This week's project is to build a calculator based of the calculator tutorial by mmtuts.  His tutorial will explain how to build a calculator that reads and writes directly from the DOM using one JavaScript file.  Your task will be to refactor the code from his tutorial into multiple files:

* `index.html`: define the structure of the user interface using HTML.  import all necessary styles and scripts
* `style.css`: define the styles for your user interface
* `scripts/listener.js`: attach an event to the user interface to respond to user interactions
* `scripts/handler.js`: the callback to your event listener that reads user input, transforms it, and communicates the result.  You will need to refactor this to read user input from the _event_ argument instead of _document._ as in the tutorial. And you will need to refactor the core math logic into ...
* `scripts/logic.js`: contains the core logic of your application, the code that takes user input as an argument and returns the main result of your program.  This file has several tests already written, you will need to write several more tests for practice.

This week's project only has 1 user story ("a user can add/multiply/subtract/divide two numbers").  As before you will be expected to build your project using branches, but this week's branches will be based on _files_ instead of _user stories_.  You should have one branch for each of the files above, merged into master, in that order.  If we check out any of your branches they should be fully working.  To get an idea of what this means, take a look through [using-user-input/stepped-madlibs](https://github.com/hackyourfuturebelgium/using-user-input/blob/master/stepped-madlibs) or this week's lesson plan.

Your completed project repository must contain:

* A README describing your project in detail.  Check out these articles to learn more about writing good README's: [makeareadme.com](https://www.makeareadme.com/), [bulldogjob](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project), [meakaakka](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)
* One well-named branch per step. If we check out any branch, it should contain _only_ the code necessary to make that step work. and it should work! Please name your branches `DOM`, `styles`, `listener`, `handler`, and `logic`.
* A file called `development-strategy.md` in which you explain how you broke this project into separate pieces, and describe what code you wrote to implement each piece.  Check out the [using-user-input](https://github.com/hackyourfuturebelgium/using-user-input) for examples.
* Include your _wireframe_ in the `development-strategy.md` along with a little explanation of why you designed the user interface like you did.  You can either include a link if you use [wireframe.cc](https://wireframe.cc), or upload an image if you use another tool.

What are you waiting for, get coding!

1. Set up your [Homework Issue](https://github.com/HackYourFutureBelgium/homework-submission#homework-issues) on this module's project board
1. Study & complete [this tutorial by mmtuts](https://www.youtube.com/watch?v=qQEYAOPWDzk)
1. Fork the [calculator-refactor starter code](https://github.com/hackyourfuturebelgium/calculator-refactor)
1. Refactor the code from the tutorial into your fork of `calculator-refactor`
1. Move your issue into "READY FOR REVIEW"!

### Exercises

There are 2 sets of exercises to start this week:

* Fork [using-user-input](https://github.com/hackyourfuturebelgium/using-user-input)
  * Turn on GitHub Pages
  * Complete `1-fill-in-the-blanks`
  * Push your work regularly, so you can ask questions with issues!
* Begin the FreeCodeCamp JavaScript exercises
  * Sign into FreeCodeCamp using your GitHub Account
  * Turn on your Public Profile
  * Complete [Basic JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/) up through [Golf Code](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)

Looking for an extra challenge? Try solving each exercise on a different branch!

---
---

### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100" alt="Hack Your Future: Belgium"></a>
