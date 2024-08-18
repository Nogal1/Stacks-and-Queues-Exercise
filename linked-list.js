class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /** Add to the start of the list */
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    /** Add to the end of the list */
    push(val) {
        const newNode = new Node(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    /** Remove from the start of the list */
    shift() {
        if (!this.head) throw new Error("List is empty");
        const removedNode = this.head;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.length--;
        return removedNode.val;
    }

    /** Get the value of the first node */
    getFirst() {
        if (!this.head) throw new Error("List is empty");
        return this.head.val;
    }

    /** Get the value of the last node */
    getLast() {
        if (!this.tail) throw new Error("List is empty");
        return this.tail.val;
    }

    /** Check if the list is empty */
    isEmpty() {
        return this.length === 0;
    }
}

module.exports = LinkedList;
