class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** addFirst(val): add new value to the front of the deque */
    addFirst(val) {
        const newNode = new Node(val);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first.prev = newNode;
            this.first = newNode;
        }
        this.size++;
    }

    /** addLast(val): add new value to the end of the deque */
    addLast(val) {
        const newNode = new Node(val);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.prev = this.last;
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }

    /** removeFirst(): remove the node from the front of the deque and return its value */
    removeFirst() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty");
        }
        const removedNode = this.first;
        this.first = this.first.next;
        if (this.first) {
            this.first.prev = null;
        } else {
            this.last = null;
        }
        this.size--;
        return removedNode.val;
    }

    /** removeLast(): remove the node from the end of the deque and return its value */
    removeLast() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty");
        }
        const removedNode = this.last;
        this.last = this.last.prev;
        if (this.last) {
            this.last.next = null;
        } else {
            this.first = null;
        }
        this.size--;
        return removedNode.val;
    }

    /** peekFirst(): return the value of the first node in the deque */
    peekFirst() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty");
        }
        return this.first.val;
    }

    /** peekLast(): return the value of the last node in the deque */
    peekLast() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty");
        }
        return this.last.val;
    }

    /** isEmpty(): return true if the deque is empty, otherwise false */
    isEmpty() {
        return this.size === 0;
    }
}

module.exports = Deque;
