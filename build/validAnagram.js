"use strict";
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
//MY SOLUTION
function isAnagram(s, t) {
    const sortedSArr = s.split("").sort();
    const sortedTArr = t.split("").sort();
    if (sortedSArr.length === sortedTArr.length) {
        let isAnagram = true;
        for (let i = 0; i < sortedSArr.length; i++) {
            if (sortedSArr[i] !== sortedTArr[i]) {
                isAnagram = false;
                break;
            }
        }
        return isAnagram;
    }
    else {
        return false;
    }
}
isAnagram("rat", "car");
//LC SOLUTION
function isAnagraLc(s, t) {
    const sortedSArr = s.split("").sort();
    const sortedTArr = t.split("").sort();
    if (sortedSArr.join("") === sortedTArr.join("")) {
        return true;
    }
    else {
        return false;
    }
}
