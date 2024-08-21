import { Node } from "../treeNode.js";

export function getSuccessor(curr) {
  debugger;
  curr = curr.rightChild;
  while (curr !== null && curr.leftChild !== null) {
    curr = curr.leftChild;
  }
  return curr;
}

export function printData(data) {
  console.log(data);
}

export function buildTree(inputArray) {
  let array = [...new Set(inputArray)];
  if (array.length === 0) {
    return null;
  }
  array.sort((a, b) => a - b);
  const MID = Math.floor((array.length - 1) / 2);
  const ROOT = new Node(array[MID]);
  ROOT.leftChild = buildTree(array.slice(0, MID));
  ROOT.rightChild = buildTree(array.slice(MID + 1));
  return ROOT;
}

export const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rightChild !== null) {
    prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.leftChild !== null) {
    prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

export function randomArray(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
}
