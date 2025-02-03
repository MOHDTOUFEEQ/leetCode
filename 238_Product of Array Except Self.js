var productExceptSelf = function(nums) {
    let answer = [1] 

    let l = 1
    for (const key of nums) {
        l = l *  key 
        answer.push(l) 
    }
    // answer.pop()

    // let r = 1
    // for (let i = nums.length -1 ; i >= 0; i--) {
    //     answer[i] = answer[i] * r
    //     r = r * nums[i]
        
    // }
    return answer
};

console.log(productExceptSelf([2,4,5]));
