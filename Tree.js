import { Node } from "./treeNode.js";
import { buildTree, prettyPrint } from "./utils/utilFunctions.js";
export class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }
  insert(data) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (data < currentNode.data) {
        currentNode = currentNode.leftChild;
      } else if (data > currentNode.data) {
        currentNode = currentNode.rightChild;
      } else if (data === currentNode.data) {
        return;
      }
      if (currentNode.leftChild === null && data < currentNode.data) {
        currentNode.leftChild = new Node(data);
      } else if (currentNode.rightChild === null && data > currentNode.data) {
        currentNode.rightChild = new Node(data);
      }
    }
  }
  delete(currentNode, x) {
    if (currentNode === null) {
      return;
    }

    // If key to be searched is in a sub-tree
    if (currentNode.data > x) {
      currentNode.leftChild = this.delete(currentNode.leftChild, x);
    } else if (currentNode.data < x) {
      currentNode.rightChild = this.delete(currentNode.rightChild, x);
    } else {
      // If root matches with the given key
      // Cases when root has no children or only right child
      if (currentNode.leftChild === null) {
        return currentNode.rightChild;
      }
      if (currentNode.rightChild === null) {
        return currentNode.leftChild;
      }
      // If root has two children
      debugger;
      let successor = getSuccessor(currentNode);
      currentNode.data = successor.data;
      currentNode.rightChild = this.delete(
        currentNode.rightChild,
        successor.data
      );
    }
    return currentNode;
  }
  find(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value === currentNode.data) {
        return currentNode;
      }
      if (value < currentNode.data) {
        currentNode = currentNode.leftChild;
      }
      if (value > currentNode.data) {
        currentNode = currentNode.rightChild;
      }
    }
    return -1;
  }
  levelOrder(callbackFunction) {
    if (!callbackFunction) {
      throw new Error("Callback function is required");
    }
    let queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let currentNode = queue.shift();
      callbackFunction(currentNode.data);
      if (currentNode.leftChild !== null) {
        queue.push(currentNode.leftChild);
      }
      if (currentNode.rightChild !== null) {
        queue.push(currentNode.rightChild);
      }
    }
  }
  inOrder(callbackFunction, currentNode = this.root) {
    if (!callbackFunction) {
      throw new Error("Callback function is required");
    }
    if (currentNode === null) {
      return;
    }
    this.inOrder(callbackFunction, currentNode.leftChild);
    callbackFunction(currentNode.data);
    this.inOrder(callbackFunction, currentNode.rightChild);
  }
  preOrder(callbackFunction, currentNode = this.root) {
    if (!callbackFunction) {
      throw new Error("Callback function is required");
    }
    if (currentNode === null) {
      return;
    }
    callbackFunction(currentNode.data);
    this.preOrder(callbackFunction, currentNode.leftChild);
    this.preOrder(callbackFunction, currentNode.rightChild);
  }
  postOrder(callbackFunction, currentNode = this.root) {
    if (!callbackFunction) {
      throw new Error("Callback function is required");
    }
    if (currentNode === null) {
      return;
    }
    this.postOrder(callbackFunction, currentNode.leftChild);
    this.postOrder(callbackFunction, currentNode.rightChild);
    callbackFunction(currentNode.data);
  }
  height(node) {
    if (node === null) {
      return 0;
    }
    return (
      Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1
    );
  }
  depth(node) {
    if (node === this.root) {
      return 0;
    }
    let currentNode = this.root;
    if (currentNode === null) {
      return 0;
    }
    let depth = 0;
    while (currentNode !== null) {
      if (node < currentNode.data) {
        currentNode = currentNode.leftChild;
        depth++;
      } else if (node > currentNode.data) {
        currentNode = currentNode.rightChild;
        depth++;
      } else if (node === currentNode.data) {
        return depth;
      }
    }
  }
  isBalanced() {
    if (
      Math.abs(
        this.height(this.root.leftChild) - this.height(this.root.rightChild)
      ) <= 1
    ) {
      return true;
    }
    return false;
  }
  rebalance() {
    const sortedArray = () => {
      let array = [];
      this.inOrder((data) => {
        array.push(data);
      });
      return array;
    };
    debugger;
    this.root = buildTree(sortedArray());
  }
}
