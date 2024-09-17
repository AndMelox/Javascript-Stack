class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    setNext(node) {
        this.next = node;
    }

    getNext() {
        return this.next;
    }

    setPrev(node) {
        this.prev = node;
    }

    getPrev() {
        return this.prev;
    }

    getValue() {
        return this.value;
    }
}
module.exports=Node;