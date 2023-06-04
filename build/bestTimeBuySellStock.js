"use strict";
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
//MY SOLUTION
function maxProfit(prices) {
    const profitArr = [];
    for (let i = 0; i < prices.length - 1; i++) {
        const currentPrice = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            const nextPrice = prices[j];
            const profit = nextPrice - currentPrice;
            if (profit > 0) {
                profitArr.push(profit);
            }
        }
    }
    if (profitArr.length > 0) {
        const max = Math.max(...profitArr);
        return max;
    }
    return 0;
}
//LC SOLUTION
function maxProfitLc(prices) {
    //LET FIRST ELE THE MIN BUY PRICE
    let minBuy = prices[0];
    //LET 0 THE MAX PROFIT
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        minBuy = Math.min(minBuy, currentPrice);
        maxProfit = Math.max(maxProfit, currentPrice - minBuy);
    }
    return maxProfit;
}
