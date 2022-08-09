/**
 * @class Stack
 */
class Stack {
  /**
     * Instantiates a new Stack
     * @constructor
     */
  constructor() {
    this.list = [];
  }

  /**
   * Return the top element in the stack
   * @return {any}
   */
  peek() {
    return this.list[this.list.length - 1];
  }

  /**
   * Adds an element to the stack
   * @param {any} value
   * @return {this}
   */
  push(value) {
    if (!value) {
      return 'Push requires a value';
    }
    this.list.push(value);

    return this;
  }

  /**
   * Removes an element from the stack
   * @return {this}
   */
  pop() {
    if (this.list.length > 0) {
      this.list.pop();
    }
    return this;
  }

  /**
   * Returns boolean for if a stack is empty
   * @return {boolean}
   */
  isEmpty() {
    return this.list.length === 0;
  }
}

const myStack = new Stack();
myStack.push('nani');
myStack.push('ronaldo');
myStack.push('messi');
myStack.pop();
console.log(myStack.peek());
