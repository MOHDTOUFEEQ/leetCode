// var sortedSquares = function(nums) {
//     let res = []
//     for (const i of nums) {
//         res.push(i*i)
//     }
//     return res.sort((a,b)=>a-b)
    
    
// };

// console.log(sortedSquares([-4,-1,2,3]));

var sortedSquares = function(nums) {
    let res = new Array(nums.length);
    let left_pointer = 0
    let right_pointer = nums.length - 1
    let index = nums.length - 1
    while(left_pointer <= right_pointer){
        let left_score = nums[left_pointer] * nums[left_pointer] 
        let right_score = nums[right_pointer] * nums[right_pointer] 
        
        if (left_score<right_score){
            res[index] = right_score
            right_pointer--
        }else{
            res[index] = left_score
            left_pointer++
        }
        index--
    }
    return res
};

console.log(sortedSquares([-4,-1,2,3]));
