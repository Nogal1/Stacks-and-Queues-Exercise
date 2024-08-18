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

    /** Add to the end of the list */
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
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
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return removedNode.val;
    }

    /** Get the value of the first node */
    peek() {
        if (!this.head) throw new Error("List is empty");
        return this.head.val;
    }

    /** Check if the list is empty */
    isEmpty() {
        return this.length === 0;
    }
}
