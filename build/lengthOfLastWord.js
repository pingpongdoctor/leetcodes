"use strict";
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal
// substring
//  consisting of non-space characters only.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
//MY SOLUTION
function lengthOfLastWord(s) {
    const arr = s.split(" ").filter((e) => Boolean(e) === true);
    return arr[arr.length - 1].split("").length;
}
//BEST SOLUTION
function lengthOfLastWordLc(s) {
    const arr = s.trim().split(" ").reverse();
    return arr[0].split("").length;
}
