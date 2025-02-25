var maximumGap = function(nums) {
    if(nums.length<2){
        return 0
    }
    let sorted = nums.sort((a,b)=>a-b)
    let res = - Infinity 
    for(let i = 1;i<sorted.length;i++){
        let sub = sorted[i] - sorted[i-1]
        res = Math.max(res,sub)
    }

    return res
};