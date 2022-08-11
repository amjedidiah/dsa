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
          return (currentNode = currentNode.left);
        } else {
          return (currentNode = null);
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

  /**
   * Breadth first search
   * @return {array}
   */
  bfs() {
    if (!this.root) {
      return [];
    }

    if (!(this.root.left || this.root.right)) {
      return [this.root.value];
    }

    const list = [];
    const queue = [this.root];

    while (queue.length) {
      const currentNode = queue.shift();
      list.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }

  /**
   * Bfs recursive
   * @return {array}
   */
  bfsRecursive() {
    const recurse = (queue) => {
      if (!queue.length) {
        return [];
      }

      const currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      return [currentNode.value].concat(recurse(queue));
    };

    return recurse([this.root]);
  }

  /**
   * Dfs recursive - inorder
   * @return {array}
   */
  dfsInOrder() {
    const recurse = (currentNode) => {
      if (!currentNode) {
        return [];
      }

      return recurse(currentNode.left)
          .concat([currentNode.value])
          .concat(recurse(currentNode.right));
    };

    return recurse(this.root);
  }

  /**
   * Dfs recursive - preorder
   * @return {array}
   */
  dfsPreOrder() {
    const recurse = (currentNode) => {
      if (!currentNode) {
        return [];
      }

      return [currentNode.value]
          .concat(recurse(currentNode.left))
          .concat(recurse(currentNode.right));
    };

    return recurse(this.root);
  }

  /**
   * Dfs recursive - postorder
   * @return {array}
   */
  dfsPostOrder() {
    const recurse = (currentNode) => {
      if (!currentNode) {
        return [];
      }

      return recurse(currentNode.left)
          .concat(recurse(currentNode.right))
          .concat([currentNode.value]);
    };

    return recurse(this.root);
  }
}

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

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(4);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(150);
tree.insert(8);
tree.insert(7);
tree.insert(17);
// tree.remove(15);
// tree.remove(20);
// tree.remove(170);
// tree.remove(20);
// tree.remove(1);
// tree.remove(6);
console.log(JSON.stringify(traverse(tree.root)));
tree.bfsRecursive();
console.log(tree.dfsInOrder());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
/**
 *        9
 *   4          20
 * 1   6     15    170
 */
// DFS: InOrder - [1,4,6,9,15,20,170]
// DFS: PreOrder - [9,4,1,6,20,15,170] : useful for rebuilding the tree back up
// DFS: PostOrder - [1,6,4,15,170,20,9]
