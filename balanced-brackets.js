function isBalanced(str) {
    const stack = [];
    const bracketPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of str) {
        // If the character is an opening bracket, push it onto the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }
        // If the character is a closing bracket, check for balance
        else if (char === ')' || char === ']' || char === '}') {
            // If stack is empty or the top of the stack doesn't match, it's unbalanced
            if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets were properly closed; otherwise, unbalanced
    return stack.length === 0;
}

// Examples:
console.log(isBalanced("hello")); // true
console.log(isBalanced("(hi) [there]")); // true
console.log(isBalanced("(hi [there])")); // true
console.log(isBalanced("(((hi)))")); // true
console.log(isBalanced("(hello")); // false
console.log(isBalanced("(nope]")); // false
console.log(isBalanced("((ok) [nope)]")); // false
