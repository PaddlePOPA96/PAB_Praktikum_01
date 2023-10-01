console.log("------ Arrow Function ------");


penjelasan = () => {return "arrow function merupakan seperti ini => "}

console.log(penjelasan())
// Normal Function
function hello() {
    return "Hello World!";
}

// Normal function
hello = function() {
    return "Hello World!";
}

console.log(hello());

// Arrow Function
hello = () => {
    return "Hello World! This is from Arrow Function";
}

// Arrow Function 
hello = () => "Hello World! This is from Arrow Function";

console.log(hello());

// Arrow Function with 1 parameter
hello = (myName) => "Hello " + myName + "! This is from Arrow Function";

// Arrow Function with 1 parameter
hello = myName => `Hello ${myName}! This is from Arrow Function`;

console.log(hello("Farid Duta"));
