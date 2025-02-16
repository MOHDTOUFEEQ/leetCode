var maxProfit = function(prices) {
    let total = 0
     let curr = prices[0]
     let prev_profit = 0 
     
     for(let i = 1;i<prices.length;i++){
         if(prices[i] < prices[i-1]){
             total += prev_profit
             prev_profit = 0
             curr = prices[i]
             continue
         }
         
         if(prices[i]>curr){
             prev_profit = (prices[i] - curr)
         }
     }
     if(prev_profit){
         total += prev_profit
     }
     return total  
 };