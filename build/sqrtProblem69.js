"use strict";
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
//TO CALCULATE SQUARE ROOT, WE USE MATH.SQRT AND WE ROUND THE NUMBER DOWN TO THE NEAREST INTERGER WITH MATH.FLOOR
function mySqrt(x) {
    return Math.floor(Math.sqrt(x));
}
