const Stack = require("./Stack");

class StackTest {
    static runTests() {
        const stack = new Stack();

        console.log("Test: push and size");
        stack.push(10);
        console.log(`Stack after pushing 10: ${stack.toString()}`);
        stack.push(20);
        console.log(`Stack after pushing 20: ${stack.toString()}`);
        stack.push(5);
        console.log(`Stack after pushing 5: ${stack.toString()}`);
        stack.push(100);
        console.log(`Stack after pushing 100: ${stack.toString()}`);
        stack.push(1);
        console.log(`Stack after pushing 1: ${stack.toString()}`);
        stack.push(50);
        console.log(`Stack after pushing 50: ${stack.toString()}`);
        stack.push(200);
        console.log(`Stack after pushing 200: ${stack.toString()}`);
        console.log(
            stack.size() === 7
                ? `Passed: size is ${stack.size()}`
                : `Failed: expected 7, got ${stack.size()}`
        );

        console.log("Test: peek");
        console.log(
            stack.peek() === 200
                ? `Passed: top element is ${stack.peek()}`
                : `Failed: expected 200, got ${stack.peek()}`
        );

        console.log("Test: pop");
        let poppedValue = stack.pop();
        console.log(`Stack after popping: ${stack.toString()}`);
        console.log(
            poppedValue === 200
                ? `Passed: popped ${poppedValue}`
                : `Failed: expected 200, got ${poppedValue}`
        );

        console.log("Test: isEmpty");
        console.log(
            stack.isEmpty()
                ? "Failed: stack should not be empty"
                : "Passed: stack is not empty"
        );

        console.log("Final stack contents:", stack.toString());
    }
}

StackTest.runTests();