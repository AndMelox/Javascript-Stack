const Stack = require('./Stack');
class StackTest {
    static runTests() {
        const stack = new Stack();

        console.log("Test: push and size");
        stack.push(10);
        stack.push(20);
        console.log(stack.size() === 2 ? "Passed" : "Failed");

        console.log("Test: peek");
        console.log(stack.peek() === 20 ? "Passed" : "Failed");

        console.log("Test: pop");
        console.log(stack.pop() === 20 ? "Passed" : "Failed");
        console.log(stack.pop() === 10 ? "Passed" : "Failed");
        console.log(stack.pop() === "Underflow" ? "Passed" : "Failed");

        console.log("Test: isEmpty");
        console.log(stack.isEmpty() ? "Passed" : "Failed");
        console.log(stack.toString());
    }
}

StackTest.runTests();