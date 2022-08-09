/**
 * Instantiates a BST node
 * @param {any} value
 * @return {this}
 */
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;

  return this;
}

/**
 * @class BinarySearchTree
 */
class BinarySearchTree {
  /**
   * Instantiates a Binary Search Tree
   * @constructor
   */
  constructor() {
    this.root = null;
  }

  /**
   * Adds a value to the Binary Search List
   * @param {any} value
   * @return {this}
   */
  insert(value) {
    if (!value) {
      return 'Insert requires a value';
    }
    const newNode = new Node(value);

    if (!this.root) {
      return (this.root = newNode);
    }

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) {
        return 'No duplicate node allowed';
      }

      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }

      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /**
   * Looks up a value in the Binary Search Tree
   * @param {any} value
   * @return {Node | null}
   */
  lookup(value) {
    if (!value) {
      return 'Lookup requires a value';
    }
    if (!value) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  /**
   * TODO: Finsih this up with help from the README file
   * Removes a value from the tree
   * @param {any} value
   * @return {this}
   */
  remove(value) {
    if (!value) {
      return 'Remove requires a value';
    }
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let found = value === this.root.value;

    while (!found) {
      if (value === currentNode.value) {
        found = true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    if (found) {
      if (!currentNode.right) {
        if (currentNode.left) {
          return currentNode = currentNode.left;
        } else {
          return currentNode = null;
        }
      }
      currentNode.value = this.traverse(currentNode.right);
    }

    return 'Value not found';
  }

  /**
   * Traverses through for replacement node
   * @param {Node} currentNode
   * @param {Node} [parentNode]
   * @return {Node | function}
   */
  traverse(currentNode, parentNode) {
    if (currentNode.left) {
      parentNode = currentNode;
      return this.traverse(currentNode.left, parentNode);
    }
    const {value} = currentNode;
    if (parentNode) {
      parentNode.left = null;
    }

    return value;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(4);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.remove(15);
// tree.remove(20);
// tree.remove(170);
tree.remove(20);
tree.remove(1);
tree.remove(6);
console.log(JSON.stringify(traverse(tree.root)));
/**
 *        9
 *   4          20
 * 1   6     15    170
 */

/**
 * Travserses a node
 * @param {Node} node
 * @return {BinarySearchTree}
 */
function traverse(node) {
  const tree = {value: node.value};
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
