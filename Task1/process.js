//process: This is an object containing information about the current Node.js process. It provides a bridge between the Node.js runtime and the operating system, allowing you to access environment variables, command-line arguments, and perform other system-related tasks.

// Accessing Command-Line Arguments:

process.argv.forEach((value, index) => {
	console.log(`${index}: ${value}`);
});
//run this script with node process.js arg1 arg2,

//Accessing Environment Variables:

console.log(process.env.PATH);
//run this script with set PATH=C:\Program Files\Nodejs;%PATH%
//node process.js

// Get process information
console.log(`This process is pid ${process.pid}`);
console.log(`This platform is ${process.platform}`);
//run this script with node process.js
