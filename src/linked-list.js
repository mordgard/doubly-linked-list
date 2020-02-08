const Node = require("./node");

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {
    const node = new Node(data);
    if (!this.length) {
      this._head = node;
      this._tail = node;
    } else {
      node.prev = this._tail;
      this._tail.next = node;
      this._tail = node;
    }
    this.length++;
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  at(index) {
    let counter = 0;
    let currentNode = this._head;

    while (true) {
      if (index === counter) return currentNode.data;
      currentNode = currentNode.next;
      counter++;
    }
  }

  insertAt(index, data) {
    // TODO Continue here
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this._head.data = null;
    this._head.next = null;
    this._tail.data = null;
    this._tail.prev = null;
    this.length = 0;
  }

  deleteAt(index) {
    let counter = 0;
    let currentNode = this._head;

    while (true) {
      if (index === counter) {
        const prevNode = currentNode.prev;
        const nextNode = currentNode.next;
        currentNode.data = null;
        currentNode.prev = null;
        currentNode.prev = null;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        return;
      }

      currentNode = currentNode.next;
      counter++;
    }
  }

  reverse() {
    // 🤔
  }

  indexOf(data) {
    let index = 0;
    let currentNode = this._head;

    while (true) {
      if (currentNode.data === data) return index;
      if (currentNode.next === null) return -1;

      currentNode = currentNode.next;
      index++;
    }
  }
}

module.exports = LinkedList;
