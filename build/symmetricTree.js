"use strict";
//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Input: root = [1,2,2,3,4,4,3]
// Output: true
class TreeNode1 {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
//CREATE A FUNCTION TO COMPARE TWO TREE NODE
//NULL VALUE IS THE MIRROR OF ITSELF
//IF THE RIGHT SUBTREE OF THE TREE1 IS AS SAME AS THE LEFT SUBTREE OF THE TREE 2  AS WELL AS WITH THE LEFT OF TREE 1 AND THE RIGHT OF TREE 2
//THE TREE 1 AND TREE 2 ARE MIRRORS OF EACH OTHER
const isMirror = function (tree1, tree2) {
    if (!tree1 && !tree2) {
        return true;
    }
    if (!tree1 || !tree2) {
        return false;
    }
    return (tree1.val === tree2.val &&
        isMirror(tree1.right, tree2.left) &&
        isMirror(tree1.left, tree2.right));
};
//USE IS MIRROR FUNCTION TO COMPARE THE ROOT BINARY TREE WITH ITSELF
function isSymmetric(root) {
    return isMirror(root, root);
}
