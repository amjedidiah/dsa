/**
 * @class Node
 */
class Node {
  /**
   * Instantiates a new node with a given value
   * @constructor
   * @param {any} value
   * @param {Node} next
   */
  constructor() {
    this.value = value;
    this.next = next;
  }
}

/**
 * @class Stack
 */
class Stack {
  /**
     * Instantiates a new Stack
     * @constructor
     */
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  /**
   * Return the top element in the stack
   * @return {this.top}
   */
  peek() {
    return this.top;
  }

  /**
   * Adds an element to the stack
   * @param {any} value
   * @return {this}
   */
  push(value) {
    if (value) {
      const newNode = new Node(value, this.top);
      this.top = newNode;
      if (this.length === 0) {
        this.bottom = newNode;
      }
      this.length++;
    }

    return this;
  }

  /**
   * Removes an element from the stack
   * @return {this}
   */
  pop() {
    if (this.length > 0) {
      this.top = this.top.next;

      if (this.length === 1) {
        this.bottom = null;
      }

      this.length--;
    }
    return this;
  }

  /**
   * Returns boolean for if a stack is empty
   * @return {boolean}
   */
  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
myStack.push('nani');
myStack.push('ronaldo');
myStack.push('messi');
myStack.pop();
console.log(myStack.peek());
