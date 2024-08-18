function calc(expression) {
    const stack = [];
    const tokens = expression.split(' ').reverse();

    for (let token of tokens) {
        if (!isNaN(token)) {
            // If the token is a number, push it onto the stack
            stack.push(Number(token));
        } else {
            // If the token is an operator, pop the top two numbers from the stack
            const num1 = stack.pop();
            const num2 = stack.pop();

            // Apply the operator and push the result back onto the stack
            switch (token) {
                case '+':
                    stack.push(num1 + num2);
                    break;
                case '-':
                    stack.push(num1 - num2);
                    break;
                case '*':
                    stack.push(num1 * num2);
                    break;
                case '/':
                    stack.push(num1 / num2);
                    break;
                default:
                    throw new Error(`Invalid operator: ${token}`);
            }
        }
    }

    // The final result will be the only number left on the stack
    return stack.pop();
}

// Example usage:
console.log(calc("+ 1 2"));             // Output: 3
console.log(calc("* 2 + 1 2"));         // Output: 6
console.log(calc("+ 9 * 2 3"));         // Output: 15
console.log(calc("- 1 2"));             // Output: -1
console.log(calc("- 9 * 2 3"));         // Output: 3
console.log(calc("/ 6 - 4 2"));         // Output: 3
