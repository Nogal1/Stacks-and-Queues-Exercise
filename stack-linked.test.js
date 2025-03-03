const Stack = require("./stack-linked");

let stack;

beforeEach(function () {
    stack = new Stack();
});

describe("push", function () {
    it("places the value at the top of the stack and returns undefined", function () {
        expect(stack.push(10)).toBe(undefined);
        expect(stack.peek()).toBe(10);
        stack.push(100);
        expect(stack.peek()).toBe(100);
        stack.push(1000);
        expect(stack.peek()).toBe(1000);
    });
});

describe("pop", function () {
    it("returns the value of the node removed", function () {
        stack.push(10);
        stack.push(100);
        stack.push(1000);
        const removed = stack.pop();
        expect(removed).toBe(1000);
        expect(stack.peek()).toBe(100);
        expect(stack.isEmpty()).toBe(false);
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });

    it("throws an error if the stack is empty", function () {
        expect(() => stack.pop()).toThrow(Error);
    });
});

describe("peek", function () {
    it("returns the value at the top of the stack", function () {
        stack.push(3);
        expect(stack.peek()).toBe(3);
        stack.push(5);
        expect(stack.peek()).toBe(5);
    });
});

describe("isEmpty", function () {
    it("returns true for empty stacks", function () {
        expect(stack.isEmpty()).toBe(true);
    });

    it("returns false for nonempty stacks", function () {
        stack.push(3);
        expect(stack.isEmpty()).toBe(false);
    });
});
