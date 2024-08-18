const LinkedList = require("./linked-list");

class Queue {
    constructor() {
        this._list = new LinkedList();
    }

    /** enqueue(val): add new value to end of the queue */
    enqueue(val) {
        this._list.push(val);
    }

    /** dequeue(): remove the node from the start of the queue and return its value */
    dequeue() {
        return this._list.shift();
    }

    /** peek(): return the value of the first node in the queue */
    peek() {
        return this._list.getFirst();
    }

    /** isEmpty(): return true if the queue is empty, otherwise false */
    isEmpty() {
        return this._list.isEmpty();
    }
}

module.exports = Queue;
