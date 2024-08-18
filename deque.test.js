const Deque = require("./deque");

let deque;

beforeEach(function () {
    deque = new Deque();
});

describe("addFirst and addLast", function () {
    it("places the value at the correct ends of the deque", function () {
        deque.addFirst(10);
        expect(deque.peekFirst()).toBe(10);
        expect(deque.peekLast()).toBe(10);
        deque.addLast(100);
        expect(deque.peekFirst()).toBe(10);
        expect(deque.peekLast()).toBe(100);
        deque.addFirst(5);
        expect(deque.peekFirst()).toBe(5);
        expect(deque.peekLast()).toBe(100);
    });
});

describe("removeFirst and removeLast", function () {
    it("removes the value from the correct ends of the deque", function () {
        deque.addFirst(10);
        deque.addLast(100);
        deque.addFirst(5);
        expect(deque.removeFirst()).toBe(5);
        expect(deque.peekFirst()).toBe(10);
        expect(deque.peekLast()).toBe(100);
        expect(deque.removeLast()).toBe(100);
        expect(deque.peekFirst()).toBe(10);
        expect(deque.peekLast()).toBe(10);
    });

    it("throws an error if the deque is empty", function () {
        expect(() => deque.removeFirst()).toThrow(Error);
        expect(() => deque.removeLast()).toThrow(Error);
    });
});

describe("peekFirst and peekLast", function () {
    it("returns the correct values from the deque", function () {
        deque.addFirst(10);
        expect(deque.peekFirst()).toBe(10);
        expect(deque.peekLast()).toBe(10);
        deque.addLast(100);
        expect(deque.peekFirst()).toBe(10);
        expect(deque.peekLast()).toBe(100);
    });
});

describe("isEmpty", function () {
    it("returns true for empty deques", function () {
        expect(deque.isEmpty()).toBe(true);
    });

    it("returns false for nonempty deques", function () {
        deque.addFirst(10);
        expect(deque.isEmpty()).toBe(false);
    });
});
