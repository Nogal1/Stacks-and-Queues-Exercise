const Queue = require("./queue-linked");

let queue;

beforeEach(function () {
    queue = new Queue();
});

describe("enqueue", function () {
    it("places the value at the end of the queue and returns undefined", function () {
        expect(queue.enqueue(10)).toBe(undefined);
        expect(queue.peek()).toBe(10);
        queue.enqueue(100);
        expect(queue.peek()).toBe(10);
        queue.enqueue(1000);
        expect(queue.peek()).toBe(10);
    });
});

describe("dequeue", function () {
    it("returns the value of the node removed", function () {
        queue.enqueue(10);
        queue.enqueue(100);
        queue.enqueue(1000);
        const removed = queue.dequeue();
        expect(removed).toBe(10);
        expect(queue.peek()).toBe(100);
        expect(queue.isEmpty()).toBe(false);
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toBe(true);
    });

    it("throws an error if the queue is empty", function () {
        expect(() => queue.dequeue()).toThrow(Error);
    });
});

describe("peek", function () {
    it("returns the value at the start of the queue", function () {
        queue.enqueue(3);
        expect(queue.peek()).toBe(3);
        queue.enqueue(5);
        expect(queue.peek()).toBe(3);
    });
});

describe("isEmpty", function () {
    it("returns true for empty queues", function () {
        expect(queue.isEmpty()).toBe(true);
    });

    it("returns false for nonempty queues", function () {
        queue.enqueue(3);
        expect(queue.isEmpty()).toBe(false);
    });
});
