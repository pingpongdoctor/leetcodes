// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

function strStr(haystack: string, needle: string): number {
  //INDEXOF RETURN THE INDEX OF THE FIRST OCCURENCE AND RETURN -1 WHEN THERE IS NOT THE OCCURENCE
  return haystack.indexOf(needle);
}
