var numJewelsInStones = function(jewels, stones) {
    let res = 0 
    let map = new Set(jewels.split(""))
    for(let i of stones){
        if(map.has(i)){
            res++
        }
    }
    
    return res
};

