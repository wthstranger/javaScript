// 1. if statement
let age = 20;
if (age >= 18) {
	console.log("Adult");
}

// 2. if...else statement
let number = 7;
if (number % 2 === 0) {
	console.log("Even number");
} else {
	console.log("Odd number");
}

// 3. if...else if...else statement
let marks = 75;
if (marks >= 90) {
	console.log("Grade A");
} else if (marks >= 60) {
	console.log("Grade B");
} else {
	console.log("Grade C");
}

// 4. Nested if statement
let hasTicket = true;
let isAdult = true;
if (hasTicket) {
	if (isAdult) {
		console.log("You can enter");
	}
}

// 5. Ternary operator
let temperature = 30;
let weather = temperature > 25 ? "Hot" : "Cool";
console.log(weather);

// 6. switch statement
let day = "Monday";
switch (day) {
	case "Monday":
		console.log("Start of the week");
		break;
	case "Friday":
		console.log("Weekend is near");
		break;
	default:
		console.log("A normal day");
}
