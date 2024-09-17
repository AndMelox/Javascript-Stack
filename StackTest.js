const Stack = require('./Stack');

class StackTest {
    static runTests() {
        const stack = new Stack();

        console.log("Test: push and size");
        stack.push(10);
        console.log(`Stack after pushing 10: ${stack.toString()}`);
        stack.push(20);
        console.log(`Stack after pushing 20: ${stack.toString()}`);
        console.log(stack.size() === 2 ? `Passed: size is ${stack.size()}` : `Failed: expected 2, got ${stack.size()}`);

        console.log("Test: peek");
        console.log(stack.peek() === 20 ? `Passed: top element is ${stack.peek()}` : `Failed: expected 20, got ${stack.peek()}`);

        console.log("Test: pop");
        let poppedValue = stack.pop();
        console.log(`Stack after popping: ${stack.toString()}`);
        console.log(poppedValue === 20 ? `Passed: popped ${poppedValue}` : `Failed: expected 20, got ${poppedValue}`);

        console.log("Test: isEmpty");
        console.log(stack.isEmpty() ? "Failed: stack should not be empty" : "Passed: stack is not empty");

        console.log("Final stack contents:", stack.toString());
    }
}

StackTest.runTests();