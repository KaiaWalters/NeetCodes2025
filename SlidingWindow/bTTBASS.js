class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let current = 0 

      for(let i = 0 ; i <= prices.length; i++) {
        for(let j = i + 1; j <= prices.length - 1; j++) {
            if(prices[j] - prices[i] > current ) {
                current = prices[j] - prices[i]
            }
        }
      }

      return current
      
    }
}
