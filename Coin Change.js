var coinChange = function(coins, amount) {
    if (amount == 0) {
        return 0
    }
    let res = []
    let res_val ;
    function recurse(index, curr,sum) {
        if (sum == amount) {
            if (!res_val) {
                res.push(...curr)
                res_val = res.length 
                return
            }
            
            if(curr.length < res.length){
                res =[]
                res.push(...curr)
                res_val = res.length 
                return
            }
        }
        if (index >= coins.length || sum > amount) {
            return
        }
        
        curr.push(coins[index])
        
        recurse(index, curr, sum + coins[index])
        curr.pop()
        recurse(index + 1, curr, sum)
    }
    recurse (0,[], 0)
    if (!res_val) {
        return -1
    }
    return res_val
};


console.log(coinChange([2],1));
