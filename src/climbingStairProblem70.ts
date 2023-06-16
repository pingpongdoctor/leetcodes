// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

//THE KEY HERE IS THAT THE NUMBER OF CASES OF N STEPS EQUALS TO THE NUMBER OF CASES OF N-1 AND N-2 STEPS
//INSTEAD OF RETURN CLIMBSTAIRS(N-1)+CLIMBSTAIRS(N-2), WE CAN DO (CLIMBSTAIRS(N-2)+CLIMBSTAIRS(N-3))+CLIMBSTAIRS(N-2)
//AND THIS THEN EQUALS TO 2*CLIMBSTAIRS(N-2)+CLIMBSTAIRS(N-3)
function climbStairs(n: number): number {
  if (n <= 3) return n;
  return 2 * climbStairs(n - 2) + climbStairs(n - 3);
}
