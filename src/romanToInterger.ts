// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.v

//SIMON SOLUTION
const convertRomanToInterger = function (s: string) {
  const romanArr = s.split("");
  const validInputRomanNumArr = ["I", "V", "X", "L", "C", "D", "M"];
  if (romanArr.every((romanNum) => validInputRomanNumArr.includes(romanNum))) {
    let numberSum = 0;

    for (let i = 0; i < romanArr.length; i++) {
      switch (romanArr[i]) {
        case "M":
          numberSum = numberSum + 1000;
          break;
        case "D":
          numberSum = numberSum + 500;
          break;
        case "C":
          numberSum = numberSum + 100;
          break;
        case "L":
          numberSum = numberSum + 50;
          break;
        case "X":
          numberSum = numberSum + 10;
          break;
        case "V":
          numberSum = numberSum + 5;
          break;
        case "I":
          numberSum = numberSum + 1;
          break;
      }
    }

    //CHEK IF THERE IS ANY IV, IX, XL,XC,CD,CM
    if (s.includes("IV") || s.includes("IX")) {
      numberSum = numberSum - 2;
    }

    if (s.includes("XL") || s.includes("XC")) {
      numberSum = numberSum - 20;
    }

    if (s.includes("CD") || s.includes("CM")) {
      numberSum = numberSum - 200;
    }

    return numberSum;
  } else {
    return "invalid input";
  }
};

//SIMON SOLUTION AFTER REFERING TO THE LEETCODE WEBSITE SOLUTIONS
const convertRomanNumToInterger = function (s: string) {
  type Props = "I" | "V" | "X" | "L" | "C" | "D" | "M";
  type RelationObj = Record<Props, number>;

  const relationObj: RelationObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  //COMPARE THE CURRENT ROMAN NUM WITH THE NEXT ONE
  const romanNumArr = s.split("");

  for (let i = 0; i < romanNumArr.length - 1; i++) {
    const currentNum = relationObj[romanNumArr[i] as keyof RelationObj];
    const nextNum = relationObj[romanNumArr[i + 1] as keyof RelationObj];

    //IF CURRENT NUM IS GREATER THAN THE NEXT ONE, ADDICT THE CURRENT ONE TO THE RESULT VARIABLE
    if (currentNum >= nextNum) {
      result = result + currentNum;
    } else {
      result = result - currentNum;
    }
  }

  //ADDICT THE LAST NUM TO THE RESULT
  result =
    result +
    relationObj[romanNumArr[romanNumArr.length - 1] as keyof RelationObj];

  return result;
};
