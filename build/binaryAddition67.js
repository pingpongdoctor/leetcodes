"use strict";
// Given two binary strings a and b, return their sum as a binary string.
// Example 1:
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"
//MY SOLUTION
function addBinary2(a, b) {
    //REVERSE ARRAY SO WE CAN ADD DIGITS FROM THE LEFT TO THE RIGHT OF BINARY NUMBERS
    const array1 = a.split("").reverse();
    const array2 = b.split("").reverse();
    //GET THE MAX LENGTH
    const length1 = array1.length;
    const length2 = array2.length;
    const maxLength = Math.max(length1, length2);
    //SET THE CARRY TO 0 AND THE RESULT EMPTY ARRAY
    let carry = 0;
    let resultArr = [];
    for (let i = 0; i < maxLength; i++) {
        //IF I IS LESS THAN THE LENGTH, USE THE CURRENT DIGIT, IF NOT, USE 0 NUMBER BECAUSE THE CURRENT DIGIT IS UNDEFINED
        const digit1 = i < length1 ? parseInt(array1[i]) : 0;
        const digit2 = i < length2 ? parseInt(array2[i]) : 0;
        //SUM CAN BE 1 | 2 | 3
        const sum = digit1 + digit2 + carry;
        //THE RESULT OF THE BINARY ADDITION IS SUM%2 SINCE IT REPRESENTS FOR THE ADDITION OF 3=0 WITH 1 CARRY, 2=0 and 1=1
        resultArr.unshift(sum % 2);
        //THE CARRY NUMBER FOR THE NEXT LEFT COLUMN IS SUM/2 SINCE IT REPRESENTS FOR THE ADDITION OF 3=1 CARRY, 2=0 CARRY, 1=0 CARRY
        carry = Math.floor(sum / 2);
    }
    //AFTER ALL, IF THERE IS STILL A CARRY, WE ADD IT TO THE LEFT OF THE RESULT ARRAY
    if (carry > 0) {
        resultArr.unshift(carry);
    }
    return resultArr.join("");
}
