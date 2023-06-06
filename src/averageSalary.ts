// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

// Example 1:

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

//SIMON SOLUTION
function average(salary: number[]): number {
  const max = Math.max(...salary);
  const min = Math.min(...salary);

  const newArr = salary.filter((e) => e !== max && e !== min);

  const sum = newArr.reduce(function (pre, cur) {
    return pre + cur;
  });

  const result = sum / newArr.length;

  return result;
}

// LC SOLUTIONS
function averageLc(salary: number[]): number {
  const sortedArr = salary.sort((a, b) => a - b).slice(1, -1);
  const sum = sortedArr.reduce(function (pre, cur) {
    return pre + cur;
  });

  const result = sum / sortedArr.length;
  return result;
}
