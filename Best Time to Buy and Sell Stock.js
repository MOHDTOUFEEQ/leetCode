// var maxProfit = function(prices) {
//     let least = 99999999;
//     let max_profit = 0    
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i]< least) {
//             least = prices[i]
            
//             continue
//         }
//         const profit = prices[i] - least
        
//         if (profit > max_profit) {
//             max_profit = profit
//         } 
//     }
//     return max_profit
// };

// console.log(maxProfit([7,1,5,3,6,4]));


var maxProfit = function(prices) {
    let least = 99999999;
    let max_profit = 0    
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            let profit =  prices[j] - prices[i]
            if (profit > max_profit) {
                max_profit = profit
            }
        }
    }
    return max_profit
};

console.log(maxProfit([7,1,5,3,6,4]));
