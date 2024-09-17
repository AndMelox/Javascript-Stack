if (typeof require !== 'undefined') {
    var Stack = require('./Stack');
} else {
    var Stack = window.Stack;
}

const stack = new Stack();

function pushToStack() {
    const input = document.getElementById('stackInput').value;
    if (input) {
        stack.push(input);
        document.getElementById('stackInput').value = '';
        updateStackOutput();
    }
}

function popFromStack() {
    const poppedValue = stack.pop();
    alert(poppedValue !== "Underflow" ? `Popped: ${poppedValue}` : 'Stack is empty');
    updateStackOutput();
}

function peekStack() {
    const peekValue = stack.peek();
    alert(peekValue !== "No elements in stack" ? `Peek: ${peekValue}` : 'Stack is empty');
}

function checkIfEmpty() {
    alert(stack.isEmpty() ? 'Stack is empty' : 'Stack is not empty');
}

function updateStackOutput() {
    const stackOutput = stack.toString();
    console.log(`Updating stack output: ${stackOutput}`);
    document.getElementById('stackOutput').innerText = `Stack: ${stackOutput}`;
}