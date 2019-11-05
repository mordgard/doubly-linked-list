const Node = require("./node");

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {
    let node = new Node(data);
    if (!this._head) {
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
    return this._head ? this._head.data : null;
  }

  tail() {
    return this._tail ? this._tail.data : null;
  }

  at(index) {
    let currentNode = this._head;
    let counter = 1;

    while (currentNode) {
      currentNode = currentNode.next;
      if (counter === index) {
        return currentNode.data;
      }
      counter++;
    }
  }

  insertAt(index, data) {
    let node = new Node(data);
    let currentNode = this._head;
    let counter = 1;

    if (index === 0) {
      this._head.prev = node;
      node.next = this._head;
      this._head = node;
    } else {
      while (currentNode) {
        currentNode = currentNode.next;
        if (counter === index) {
          node.prev = currentNode.prev; // TODO continue from this place
        }
        counter++;
      }
    }

    this.length++;
  }

  isEmpty() {
    return this._head ? false : true;
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  deleteAt(index) {}

  reverse() {}

  indexOf(data) {}
}

module.exports = LinkedList;
