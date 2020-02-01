// -- Source Code --
//  the code you write, save, read, push/pull, edit ... it's just text
//    there are no errors or logs because there is no running program!
//  Static Analysis: some errors can be found without running the code
//    linters like ESlint and JSHint are common tools for this task
//    click on "open in JSHint" to lint any of these exercises

// -- Creation Phase -- the first phase program life cycle
//    the JS engine parses your source code, 2 important things happen:
//    1. Some types of errors are caught, mostly syntax errors
//    2. Program memory is prepared.  this is known as hoisting
//  Creation Phase errors will prevent your program from beginning
//    you know an error is a creation phase error because:
//    - JS Tutor will not pass to the page with memory on the right
//    - if you run code here, the panel on the right will say so
//  To find & fix your creation phase errors you can
//    - check the icons to the left of the editor
//    - open your code in JSHint or in JS Tutor
//    - Read the message in the console (but it won't be very helpful)

// -- Execution Phase -- the second phase of program life cycle,
//  the JS engine will step through your instructions one at a time
//    - some types of instructions create values or update memory
//    - others will describe which line is executed next
//  Execution Phase errors will stop your program's execution
//    you know an error is an execution phase error because:
//    - JS Tutor will stop on the second screen
//    - if you run code here, it will say so
//  To find & fix your execution phase errors you can
//    - study your code in JS Tutor or JSHint
//  or you can practice debugging with the console:
//    1. in the most recent error message find the line called "editor"
//    2. find the two numbers at the far right of the line -> x:y
//    3. these are the line and the character where your error occured
//    4. now you know where it occured, google your error!
