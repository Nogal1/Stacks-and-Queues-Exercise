class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head; // Circular link
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head; // Circular link
        }
    }

    remove(node) {
        if (this.head === this.tail) {
            // Only one node left
            this.head = null;
            this.tail = null;
            return;
        }

        let current = this.head;

        // Handle removing the head node
        if (node === this.head) {
            this.tail.next = this.head.next;
            this.head = this.head.next;
            return this.head;
        }

        // Find the node before the one we want to remove
        while (current.next !== node) {
            current = current.next;
        }

        current.next = node.next;

        // Handle removing the tail node
        if (node === this.tail) {
            this.tail = current;
        }

        return current.next;
    }
}

function findSurvivor(n, k) {
    const list = new CircularLinkedList();

    // Populate the circular linked list with n nodes
    for (let i = 1; i <= n; i++) {
        list.add(i);
    }

    let current = list.head;

    // Eliminate nodes until only one remains
    while (n > 1) {
        // Move k-1 steps (because the current node is considered the first step)
        for (let i = 1; i < k; i++) {
            current = current.next;
        }

        // Remove the k-th node
        current = list.remove(current);
        n--;
    }

    // The last remaining node is the survivor
    return current.val;
}

// Example usage:
console.log(findSurvivor(10, 3)); // Output: 4

