"use strict";
// There is a function signFunc(x) that returns:
// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.
// Return signFunc(product).
//SIMON SOLUTION
function arraySign(nums) {
    if (1 <= nums.length && nums.length <= 1000) {
        let result = nums[0];
        for (let i = 1; i < nums.length; i++) {
            result = result * nums[i];
        }
        if (result > 0) {
            return 1;
        }
        if (result < 0) {
            return -1;
        }
        if (result === 0) {
            return 0;
        }
    }
}
//LEETCODE SOLUTION
function arraySignLc(nums) {
    //USE REDUCE METHOD TO MULTIPLY THE VALUES WITH EACH OTHER
    //USE MATH.SIGN TO CONVERT VALUES TO 1,0 AND -1 BEFORE MAKING A PRODUCT
    //WE CAN ADD INITIAL VALUE AS 1 (EXAMPLE)
    const result = nums.reduce(function (previousValue, currentValue) {
        return Math.sign(previousValue) * Math.sign(currentValue);
    }, 1);
    return result;
}
