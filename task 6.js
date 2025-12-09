// B.I. Reverse functions

// Method 1: using arguments object
function reverseArgs1() {
    return Array.from(arguments).reverse();
}

// Method 2: using rest parameters
function reverseArgs2(...args) {
    return args.reverse();
}

// B.2. Exactly two parameters
function exactlyTwoParams(a, b) {
    if (arguments.length !== 2) {
        throw new Error("Function requires exactly 2 parameters");
    }
    return [a, b];
}

// B.3. Add numbers function
function addNumbers(...args) {
    if (args.length === 0) {
        throw new Error("At least one number is required");
    }
    if (!args.every(arg => typeof arg === "number")) {
        throw new Error("All arguments must be numbers");
    }
    return args.reduce((sum, num) => sum + num, 0);
}

// Test functions
function testReverseArgs() {
    console.log("reverseArgs1(1,2,3,4):", reverseArgs1(1,2,3,4));
    console.log("reverseArgs2('a','b','c'):", reverseArgs2('a','b','c'));
}

function testExactlyTwoParams() {
    try {
        console.log("exactlyTwoParams(5,10):", exactlyTwoParams(5,10));
        console.log("exactlyTwoParams(5):", exactlyTwoParams(5)); // Will throw
    } catch (e) {
        console.error(e.message);
    }

    try {
        console.log("exactlyTwoParams(1,2,3):", exactlyTwoParams(1,2,3)); // Will throw
    } catch (e) {
        console.error(e.message);
    }
}

function testAddNumbers() {
    try {
        console.log("addNumbers(1,2,3,4):", addNumbers(1,2,3,4));
        console.log("addNumbers():", addNumbers()); // Will throw
    } catch (e) {
        console.error(e.message);
    }

    try {
        console.log("addNumbers(1,'2'):", addNumbers(1,'2')); // Will throw
    } catch (e) {
        console.error(e.message);
    }
}
