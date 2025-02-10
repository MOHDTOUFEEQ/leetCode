var firstMissingPositive = function(nums) {
    let obj = {}
    let len = 0
    for(let i of nums){
        if(i> 0){
            obj[i]  = 1
            len++
        }
    }
    for(let i = 1; i <= len;i++){
        
        if(! (i in obj)){
            return i 
        }
    }
    return len+1
};