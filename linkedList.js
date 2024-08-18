class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null; // Doubly-linked list support (optional)
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /** Add to the end of the list */
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail; // Doubly-linked list support
            this.tail = newNode;
        }
        this.length++;
    }

    /** Remove from the start of the list */
    shift() {
        if (!this.head) throw new Error("List is empty");
        const removedNode = this.head;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null; // Doubly-linked list support
        } else {
            this.tail = null;
        }
        this.length--;
        return removedNode.val;
    }

    /** Get the value of the first node */
    peekFirst() {
        if (!this.head) throw new Error("List is empty");
        return this.head.val;
    }

    /** Get the value of the last node */
    peekLast() {
        if (!this.tail) throw new Error("List is empty");
        return this.tail.val;
    }

    /** Check if the list is empty */
    isEmpty() {
        return this.length === 0;
    }
}

module.exports = LinkedList;
