const fs = require("fs");

// 1. `Buffer` Object:
// The `Buffer` object in Node.js is used to handle binary data. It provides a way to work with raw data, such as reading from or writing to sockets, files, or other streams. Here are a few key points about the `Buffer` object:

//Creating a Buffer: You can create a buffer using the `Buffer.from()`, `Buffer.alloc()`, or `Buffer.allocUnsafe()` methods. For example:

const buffer = Buffer.from("Hello, World!", "utf8");

// Manipulating Buffer Data: You can read or modify the data in a buffer using various methods, such as `buffer.toString()`, `buffer.slice()`, `buffer.write()`, etc. For example:

console.log(buffer.toString("utf8")); // Output: Hello, World!

//Buffer Encoding: Buffers can be created with different encodings, such as `'utf8'`, `'hex'`, `'base64'`, etc. The encoding determines how the raw data is interpreted or represented. For example:

console.log(buffer.toString("hex")); // Output: 48656c6c6f2c20576f726c6421
