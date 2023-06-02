"use strict";
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
const returnedIndicesArr = function (nums, target) {
    if (nums.length >= 0 &&
        nums.length <= 10 ** 4 &&
        nums.every((num) => num >= -(10 ** 9) && num <= 10 ** 9) &&
        target >= -(10 ** 9)) {
        const returnedArr = [];
        for (let i = 0; i < nums.length; i++) {
            const currentNumber = nums[i];
            for (let a = i + 1; a < nums.length; a++) {
                const nextNumber = nums[a];
                if (currentNumber + nextNumber === target) {
                    //I AND A ARE INDICES
                    returnedArr.push(i);
                    returnedArr.push(a);
                }
            }
        }
        if (returnedArr.length > 0) {
            return returnedArr;
        }
        if (returnedArr.length === 0) {
            return "No numbers match";
        }
    }
    else {
        return "invalid input";
    }
};
