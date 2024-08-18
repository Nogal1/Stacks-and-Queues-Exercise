class Stack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        this.stack.push(val);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

function reverseString(inputString) {
    const stack = new Stack();
    let reversedString = '';

    // Push each character onto the stack
    for (let i = 0; i < inputString.length; i++) {
        stack.push(inputString[i]);
    }

    // Pop each character from the stack and append to the result
    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    return reversedString;
}

// Example:
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
