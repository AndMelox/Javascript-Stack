class Stack {
    constructor() {
        this.head = null;
    }

    push(element) {
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            node.setNext(this.head);
            this.head = node;
        }
    }

    pop() {
        if (this.head === null) {
            return "No elements in Stack";
        }
        let value = this.head.getValue();
        this.head = this.head.getNext();
        return value;
    }

    peek() {
        if (this.head === null) {
            return "No elements in Stack";
        }
        return this.head.getValue();
    }

    isEmpty() {
        return this.head === null;
    }
}