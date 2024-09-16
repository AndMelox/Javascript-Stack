class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    setNext(node) {
        this.next = node;
    }

    getNext() {
        return this.next;
    }

    getValue() {
        return this.value;
    }
}