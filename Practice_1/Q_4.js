// Write conditions to check:

// Is age greater than or equal to 18?
// Is age less than 18?
// Is the person 18+ AND has a license?
// Is the person under 18 OR has a license?
// Does the person NOT have a license?

let age = 20;
let hasLicense = true;

if (age >= 18){
    console.log("Age is greater than or equal to 18");
}

if (age < 18){
    console.log("Age is less than 18");
}

if (age >= 18 && hasLicense){
    console.log("Person is 18+ and has a license");
}

if (age < 18 || hasLicense){
    console.log("Person is under 18 OR has a license");
}

if (!hasLicense){
    console.log("Person does not have a license");
}