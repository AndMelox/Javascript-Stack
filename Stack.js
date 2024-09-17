const Node = require('./Node');

class Stack {
    constructor() {
        this.head = null;
        this._size = 0;
    }

    push(element) {
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            node.setNext(this.head);
            this.head = node;
        }
        this._size++;
    }

    size() {
        return this._size;
    }

    pop() {
        if (this.head === null) {
            return "Underflow";
        }
        let value = this.head.getValue();
        this.head = this.head.getNext();
        this._size--;
        return value;
    }

    peek() {
        if (this.head === null) {
            return "No elements in stack";
        }
        return this.head.getValue();
    }

    isEmpty() {
        return this.head === null;
    }

    toString() {
        let current = this.head;
        let str = '';
        while (current !== null) {
            str += current.getValue() + ' ';
            current = current.getNext();
        }
        return str.trim();
    }
}

module.exports = Stack;