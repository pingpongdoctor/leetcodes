"use strict";
// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
const isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    const xStr = x.toString();
    const xArr = xStr.split("");
    const reverseXArr = xArr.reverse();
    const reverseXStr = reverseXArr.join("");
    if (xStr === reverseXStr) {
        return true;
    }
    else {
        return false;
    }
};
