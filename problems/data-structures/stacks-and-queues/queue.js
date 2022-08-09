/**
 * @class Node
 */
class Node {
  /**
   * Instantiates a new Node
   * @constructor
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * @class Queue
 */
class Queue {
  /**
   * Instantiates a new Queue
   * @constructor
   */
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * Returns the first element in the queue
   * @return {this.first}
   */
  peek() {
    return this.first;
  }

  /**
   * Adds an element to the queue
   * @param {any} value
   * @return {this}
   */
  enqueue(value) {
    if (!value) {
      return 'Enqueue requires a value';
    }

    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }

    this.last = newNode;

    this.length++;
    return this;
  }

  /**
   * Removes an element from the front of the queue
   * @return {this}
   */
  dequeue() {
    if (this.length > 0) {
      if (this.length === 1) {
        this.last = null;
      }
      this.first = this.first.next;
      this.length--;
    }

    return this;
  }

  /**
   * Returns boolean for if queue is empty
   * @return {boolean}
   */
  isEmpty() {
    return this.length === 0;
  }
}


const myQueue = new Queue();
myQueue.enqueue('nani');
myQueue.enqueue('ronaldo');
myQueue.enqueue('messi');
myQueue.enqueue('pele');
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());

