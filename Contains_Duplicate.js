// var containsDuplicate = function(nums) {
//     let res = false
//     const sorted_nums = nums.sort((a,b)=> a-b)
//     let prev = sorted_nums[0]
//     for(let i = 1; i < nums.length; i++){
//         if(sorted_nums[i] == prev){
//             return true
//         }else{
//             prev = sorted_nums[i]
//         }
//     }
//     return res
// };


// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))

var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length 
    
};


console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))