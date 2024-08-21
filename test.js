import { Tree } from "./Tree.js";
import { randomArray, prettyPrint, printData } from "./utils/utilFunctions.js";

export function test() {
  const randomTree = new Tree(randomArray(100));
  prettyPrint(randomTree.root);
  console.log(`Is balanced: ${randomTree.isBalanced()}`);
  console.log("Level Order");
  randomTree.levelOrder(printData);
  console.log("Pre Order");
  randomTree.preOrder(printData);
  console.log("Post Order");
  randomTree.postOrder(printData);
  console.log("In Order");
  randomTree.inOrder(printData);
  randomTree.insert(101);
  randomTree.insert(102);
  randomTree.insert(103);
  randomTree.insert(104);
  randomTree.insert(105);
  randomTree.insert(106);
  randomTree.insert(107);
  randomTree.insert(108);
  randomTree.insert(109);
  randomTree.insert(110);
  prettyPrint(randomTree.root);
  console.log(`Is balanced: ${randomTree.isBalanced()}`);
  randomTree.rebalance();
  prettyPrint(randomTree.root);
  console.log(`Is balanced: ${randomTree.isBalanced()}`);
  console.log("Level Order:");
  randomTree.levelOrder(printData);
  console.log("Pre Order:");
  randomTree.preOrder(printData);
  console.log("Post Order:");
  randomTree.postOrder(printData);
  console.log("In Order:");
  randomTree.inOrder(printData);
}
