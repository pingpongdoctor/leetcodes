// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

//USE BIGINT TO CONVERT A STRING TO BIGINT SINCE NUMBER ONLY RETURN NUMBER THAT IS SMALLER THAN 9,007,199,254,740,991
//BIGINT IS A METHOD FROM TS LIB AND IS ONLY SUPPORTED FROM ES2020 SO WE NEED TO CONFIG THE TSCONFIG FILE
//SHOULD USE ESNEXT FOR LIB AND TARGET IN TSCONFIG.TS
function plusOne(digits: number[]) {
  const str = digits.join("");
  const num = BigInt(str) + BigInt(1);
  return num.toString().split("");
}
