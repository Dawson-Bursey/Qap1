const validator = require("validator");

let email = "test@example.com";

if (validator.isEmail(email)) {
	console.log("Valid Email");
} else {
	console.log("Invalid Email");
}
