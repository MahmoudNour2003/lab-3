let expression = prompt("Please enter a math expression :");
function evaluateExpression(expr) {
    try {
        let result =new Function('return ' + expr)();
        alert(`You entered: ${expr}, and the result is: ${result}`);
    } catch (error) {
        alert("Invalid expression. Please try again.");
    }

}
evaluateExpression(expression);