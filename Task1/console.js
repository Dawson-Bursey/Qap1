// 2. Console Object:
// The `console` object in Node.js provides a simple debugging console that is similar to the console object provided by web browsers. It allows you to log information, errors, warnings, and more. Here are a few key points about the `console` object:

// Logging Messages: You can log messages to the console using methods like console.log(), console.error(), console.warn(), etc. For example:

console.log("Hello, World!"); // Output: Hello, World!

// Formatting Messages: You can use placeholders and string substitutions to format log messages. For example:

const name = "John";
console.log("Hello, %s!", name); // Output: Hello, John!

// Timing Execution: You can measure the time taken by a block of code using console.time() and console.timeEnd() For example:

console.time("myTimer");
// Code to measure execution time
console.timeEnd("myTimer"); // Output: myTimer: 123ms
