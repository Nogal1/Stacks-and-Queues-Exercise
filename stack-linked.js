const LinkedList = require("./linked-list"); // Assume linkedlist.js contains the LinkedList class

class Stack {
    constructor() {
        this._list = new LinkedList();
    }

    /** push(val): add new value to end of the stack. */
    push(val) {
        this._list.unshift(val); // Add to the beginning of the list (top of the stack)
    }

    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty. */
    pop() {
        if (this.isEmpty()) throw new Error("Stack is empty");
        return this._list.shift(); // Remove from the beginning of the list (top of the stack)
    }

    /** peek(): return the value of the first node in the stack. */
    peek() {
        return this._list.getFirst(); // Return the first value in the list (top of the stack)
    }

    /** isEmpty(): return true if the stack is empty, otherwise false */
    isEmpty() {
        return this._list.isEmpty();
    }
}

module.exports = Stack;

