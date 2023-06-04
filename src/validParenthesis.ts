// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//CAN NOT PASS
//LEETCODE SOLUTION
const isValid = function (s: string) {
  interface Volcabulary {
    [index: string]: string;
  }

  //CREATE AN OBJECT EXPRESSING THE RELATIONS OF SYNTAXES
  const volcabulary: Volcabulary = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  //CREATE A STACK AND USE FOR LOOP TO CHECK THE CORRECTNESS OF THE SYNTAXES'ORDERS
  const stack: string[] = [];

  s.split("").forEach((symbol) => {
    //IF THE LAST ELEMENT OF THE STACK ARRAY IS NOT AS SAME AS THE CURRENT SYMBOL, ADD THE CORRESPONDING SYMBOL OF THE CURRENT ONE TO THE ARRAY
    if (stack[stack.length - 1] !== symbol) {
      stack.push(volcabulary[symbol]);
    }
    //IF THE LAST ELE OF THE ARRAY IS AS SAME AS THE CURRENT SYMBOL, DELETE THE LAST ELE
    else {
      stack.pop();
    }
  });

  return !stack.length;
};
