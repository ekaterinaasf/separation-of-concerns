<h1 id='top' align="center">Module 2: Separation of Concerns</h1>

<div align="center">
  <a href="https://hackyourfuture.be" target="_blank">
    <img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="250" height="250"/>
  </a>
</div>

> "The most important principle in Software Engineering is the Separation of Concerns (SoC):
The idea that a software system must be decomposed into parts that overlap in functionality as little as possible."
> * [Effective Software Design](https://effectivesoftwaredesign.com/2012/02/05/separation-of-concerns/)

### Overview

* [Module Summary](#module-summary)
* [Learning Objectives](#learning-objectives)
* [About the Projects](#about-the-projects)
* [Homework Submission](https://github.com/hackyourfuturebelgium/homework-submission) (external)
* Week 1: Isolate and Integrate
  * [Prep Work](./week-1)
  * [Lesson Plan](https://hackyourfuture.be/separation-of-concerns/week-1)
  * [Assignments](./week-1#assignments)
* Week 2:
  * [Prep Work](./week-2)
  * [Lesson Plan](https://hackyourfuture.be/separation-of-concerns/week-2)
  * [Assignments](./week-2#assignments)
* Week 3:
  * [Prep Work](./week-3)
  * [Lesson Plan](https://hackyourfuture.be/separation-of-concerns/week-3)
  * [Assignments](./week-3#assignments)
* [Deeper Dives](./deeper-dives.md)
* [Class Recordings](./class-recordings.md)
* [Study Links](https://study.hackyourfuture.be) (external)

---

## Module Summary

JavaScript is the programming language for turning your projects from pretty pages to interactive web sites.  But wait!  What's happening behind the screen is even more important than what the user sees!  Before hacking your way into cool projects, take some time to understand Separation of Concerns.

__Separation of Concerns__ means that each piece of code has one simple and well defined task, that multiple pieces of code don't do the same thing, and that your files of code are well-organized according to their task.  In this module you will be exploring the separation of UI, handling user input, and application logic:

1. _DOM_: define the structure of your user interface
2. _Styles_: define the display of your user interface
3. _Event Listeners_: define _how_ users will interact with your program
4. _Handlers_: define _what_ happens when a user interacts with your program
5. _Logic_: define & test how user data is transformed

Understanding & applying these principles will help with testing, development scheduling, collaboration, maintenance, ... __everything__. In our experience, understanding separation of concerns is the most important thing a new developer can learn.  Far more important than learning new libraries, build tools, or being good at solving algorithm challenges.


[TOP](#overview)

---

## Learning Objectives

### Programming Skills

* Learning from Code
  * Reading & understanding source code
  * Making small, incremental experiments
  * Copying & modifying others' code
* Tracing Program Execution
  * Stepping through with tools like JS Tutor & Devtools debugger
  * Tracing values manually with pencil & paper
  * Using the `debugger` statement with the DevTools
* Understand Behavior vs. Implementation
  * _Behavior_: The test cases that a function does and doesn't pass. What the function _does_.
  * _Implementation_: The actual lines of code written.  How memory is manipulated so that the behavior _happens_.
* Testing
  * Reading & writing test cases
  * Developing projects in tiny steps, testing before moving on
* Using `console.assert` for small inline tests
  * Learn to _predict_ what _will happen_ using `console.assert`
  * Instead of _describing_ what _did happen_ using `console.log`
* Refactoring: Same behavior, different implementation
  * Rewriting or reorganizing code without changing behavior
  * Breaking code into smaller pieces for testing & readability
* Debugging:
  * Bugs are when you don't understand what your code is doing, not when your code doesn't understand what you want it to do!  The computer is always right :)
  * Identify the line(s) of code that are not doing what you expect
  * Find several other ways of writing that line
  * Replace with the one you understand best

### Isolating JavaScript (study JS outside of applications)

* JS Program Life-Cycle:
  1. _Source code_: The `.js` text file you write.  These are just instructions saved as text in your computer, not a live program!
  2. _Creation Phase_: When the JavaScript interpreter first reads your instructions.  At this point it will prepare the program memory and check for some types of errors.
  3. _Execution Phase_: This is the real deal! The JavaScript interpreter will now step through your instructions _one line at at time_, updating program memory according to your instructions.
* Errors:
  * _Syntax vs. Semantic_: Some errors happen because you wrote JavaScript that the interpreter couldn't interpret (syntax), other errors happen when you try to do something that isn't allowed (semantic).
  * _Creation vs. Execution_: Some errors are thrown before the program actually starts (creation phase), others are thrown during program execution when a line of code is reached (execution phase).
* Primitives Types & Strict Comparison
  * _types_: find the type of a primitive using `typeof`
  * _strict comparison_: compare the type _and_ value of two primitives using `===` & `!==`
  * _explicit coercion_: casting between primitive types
* Variables:
  * `let` & `const`
  * Declaration, Assignment & Re-Assignment.
* String Methods
* Functions:
  * Declaring vs. Calling
  * Arguments vs. Parameters
  * Return Values
  * Lexical scope
* Operators
  * _Implicit Coercion_: What happens when you try to combine different types?
  * Logical Operators
  * String operators
* Statements vs. Expressions
  * case study: ternaries vs. if/else
* Control Flow
  * Conditionals
  * Loops
* Data Structures: Arrays & Objects
  * Primitives _are_ data, arrays & objects _organize_ data
  * _reference vs. value_
  * accessing & modifying entries in arrays & objects
  * `for in` & `for of` loops

### Integrating JavaScript (study JS embedded in applications)

* Document Life-Cycle
  * `<head>`: Scripts & styles are loaded top to bottom, before the `<body>`
  * `<body>`: Everything is executed/loaded top to bottom
  * so what?  Any DOM script should be written/loaded _below_ the element it interacts with
* JS & the DOM
  * Adding event listeners to DOM elements
  * Reading & Writing values from DOM elements
* Handling events:
  * Reading user data from events
  * Implementing user stories with this data
* Organizing your code based on it's _role_ in your program
  1. _DOM_: define the structure of your user interface
  2. _Styles_: define the display of your user interface
  3. _Event Listeners_: define _how_ users will interact with your program
  4. _Handlers_: define _what_ happens when a user interacts with your program
  5. _Logic_: define & test how user data is transformed
* Incremental Development 2.0:
  * Develop your projects one user-story at a time ...
  * AND develop your user stories one step at a time!
  * Carefully complete & test one piece of code before writing the next

[TOP](#overview)

---

## About the Projects

Projects in this module will be more challenging than in the last module, adding even a little JavaScript into a website will make things much more complicated! To help you deal with this complexity you will practice separating and organizing your JavaScript code into different files based on what role it plays in your application.

### Separating your Concerns

A working project is not enough! For projects in this module we will expect you to turn in code that is well organized in different files based on it's role.  The first week's project will come with some starter-code to help you get used to the folder structure we expect.  The `using-user-input` exercises will also act as a guide & practice for building well-structured projects.

### Development Strategy

Just like in the previous module, you will be expected to explain your development strategy in a separate file called `development-strategy.md`.  Projects involving JavaScript are naturally more complicated than projects with only HTML & CSS, for this reason you will be expected to structure your `development-strategy` files differently than you did in the last module.  To get an idea of how to describe your strategies in this module, take a look at the `using-user-input` exercises.

### Git Branching

In this module we will be expected to build your projects using branches.  If you are looking to challenge yourself try making branches on your branches!  Instead of simply building each user story as a series of commits on one branch, try making one branch for each user story (like before) but then develop each file in your project on _another_ branch, merging back into your story branch when the file is done.  And merging your story branch back to master when each file is finished.

Good luck!

[TOP](#overview)

---
---

### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100" alt="Hack Your Future: Belgium"></a>
