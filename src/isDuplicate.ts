//MY SOLUTION
function containDuplicate(nums: number[]): boolean {
  let result = false;

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    let isDuplicate = false;

    for (let a = i + 1; a < nums.length; a++) {
      const nextNum = nums[a];
      if (currentNum === nextNum) {
        isDuplicate = true;
        break;
      }
    }

    if (isDuplicate === true) {
      result = true;
      break;
    }
  }

  return result;
}

//SOLUTION ON LEETCODE
const containDuplicateOrNot = function (nums: number[]) {
  let result = false;

  const shortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < shortedNums.length - 1; i++) {
    if (shortedNums[i] === shortedNums[i + 1]) {
      result = true;
    }
  }

  return result;
};
