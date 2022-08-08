/**
 * @class Node
 * @constructor
 */
class Node {
  /**
   * Constructor function for Node
   * @param {any} value
   * @param {any} prevNode
   */
  constructor(value, prevNode) {
    this.value = value;
    this.next = null;
    if (prevNode !== undefined) {
      this.prev = prevNode;
    }
  }
}

/**
 * @class LinkedList
 * @constructor
 */
class LinkedList {
  /**
   * Constructor function for LinkedList
   * @param  {...any} args
   */
  constructor(...args) {
    this.head = new Node(args[0]);
    this.tail = this.head;
    this.length = 1;

    for (let i = 1; i < args.length; i++) {
      this.append(args[i]);
    }
  }

  /**
   * Prints the list in a simpler format
   * @return {string}
   */
  print() {
    let currentNode = this.head;
    const list = [];

    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return list.join('==>');
  }

  /**
   * Adds an element to the beginning of the list
   * @param {any} value
   * @return {this}
   */
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  /**
   * Adds an element to the end of the list
   * @param {any} value
   * @return {this}
   */
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  /**
   * Adds an element to any point in the list
   * @param {number} index
   * @param {any} value
   * @return {this}
   */
  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverse(index - 1);
    const leaderNext = leader.next;
    leader.next = newNode;
    newNode.next = leaderNext;
    this.length++;

    return this;
  }

  /**
   * Traverse to a particular index
   * @param {number} index
   * @return {this.head}
   */
  traverse(index) {
    let currentNode = this.head;
    let counter = 0;

    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  /**
   * Removes a value from the list at any index
   * @param {number} index
   * @return {this}
   */
  remove(index) {
    if (index >= this.length) {
      return;
    } else if (index === 0) {
      this.head = this.head.next;
    } else {
      const leader = this.traverse(index - 1);
      leader.next = leader.next.next;
      this.length--;
    }

    return this;
  }

  /**
   * Reverses the list
   * @return {this}
   */
  reverse() {
    if (this.length === 1) {
      return this;
    }

    let currentNode = this.head.next;
    const firstNode = new Node(this.head.value);
    this.head = firstNode;
    this.tail = firstNode;

    while (currentNode) {
      const newNode = new Node(currentNode.value);
      newNode.next = this.head;
      this.head = newNode;

      currentNode = currentNode.next;
    }

    return this;

    // Nsakcbasc
  }
}

/**
 * @class DoublyLinkedList
 * @constructor
 */
class DoublyLinkedList {
  /**
   * Constructor function for DoublyLinkedList
   * @param  {...any} args
   */
  constructor(...args) {
    this.head = new Node(args[0], null);
    this.tail = this.head;
    this.length = 1;

    for (let i = 1; i < args.length; i++) {
      this.append(args[i]);
    }
  }

  /**
   * Prints the list in a simpler format from the head
   * @param {('forward' | 'backward')} direction
   * @return {string}
   */
  _print(direction) {
    let currentNode = direction === 'forward' ? this.head : this.tail;
    const list = [];
    const directionParam = direction === 'forward' ? 'next' : 'prev';

    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode[directionParam];
    }

    return list.join('==>');
  }

  /**
   * Prints the list in a simpler format from the head
   * @return {string}
   */
  printForward() {
    return this._print('forward');
  }

  /**
   * Prints the list in a simpler format from the tail
   * @return {string}
   */
  printBackward() {
    return this._print('backward');
  }

  /**
   * Adds an element to the beginning of the list
   * @param {any} value
   * @return {this}
   */
  prepend(value) {
    const newNode = new Node(value, null);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  /**
   * Adds an element to the end of the list
   * @param {any} value
   * @return {this}
   */
  append(value) {
    const newNode = new Node(value, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  /**
   * Adds an element to any point in the list
   * @param {number} index
   * @param {any} value
   * @return {this}
   */
  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }

    const leader = this.traverse(index - 1);
    const newNode = new Node(value, leader);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;

    return this;
  }

  /**
   * Traverse to a particular index
   * @param {number} index
   * @return {this.head}
   */
  traverse(index) {
    let currentNode = this.head;
    let counter = 0;

    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  /**
   * Removes a value from the list at any index
   * @param {number} index
   * @return {this}
   */
  remove(index) {
    if (index >= this.length) {
      return;
    } else if (index === 0) {
      this.head = this.head.next;
    } else {
      const leader = this.traverse(index - 1);
      leader.next = leader.next.next;
      leader.next.prev = leader;
      this.length--;
    }

    return this;
  }
}

const myList = new LinkedList(10, 34, 54);
// myList.append(30);
// myList.prepend(55);
// myList.insert(1, 35);
// myList.insert(0, 60);
// myList.remove(5);
myList.prepend(132);
myList.reverse();
console.log(myList, myList.print());

const myDoublyList = new DoublyLinkedList(32, 55);
myDoublyList.prepend('m3');
myDoublyList.insert(0, 'k9');
myDoublyList.remove(0);
console.log(myDoublyList.printBackward(), myDoublyList.printForward());
