"use strict";
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value
// Example
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
class TreeNode {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
//ONE TREE HAS TWO SUBTREES
//EACH SUBTREE HAS NODES INSIDE OF IT
function isSameTree(p, q) {
    //IF BOTH TREES ARE EMPTY
    if (!p && !q) {
        return true;
    }
    //IF ONE TREE IS EMPTY AND ONE TREE HAS NODES
    if (!p || !q) {
        return false;
    }
    //RECURSIVELY CHECK THE LEFT AND THE RIGHT SUBTREES
    //EACH SUBTREE IS ALSO A BINARY TREE
    return (p.val === q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right));
}
