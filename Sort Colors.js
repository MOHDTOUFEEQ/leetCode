// var sortColors = function(nums) {
//     let lowest = 0
//     let high = nums.length-1

//     for (let i = 0;i<nums.length ; i++) {
//         let mid = nums[i]
//         if (mid == 0) {
//             let curr = nums[lowest]
//             nums[lowest] = mid 
//             nums[i] = curr 
//             lowest++
//         }
//         else if(mid == 2 && i < high){
//             let curr = nums[high]
//             nums[high] = mid
//             nums[i] = curr
//             high--
//             i--
//         }
        
//     } 
//     return nums
// };

var sortColors = function(nums) {
    let low = 0
    let highest = nums.length -1
    let curr = 0

    while(curr<=highest){
        if (nums[curr] == 0) {
            let dummy = nums[low]
            nums[low] = 0
            nums[curr] = dummy
            low++
            curr++
        }else if(nums[curr] == 2){
            let dummy = nums[highest]
            nums[highest] = 2
            nums[curr] = dummy
            highest--
        }
        else{
            curr++
        }
    }
    return nums
};

console.log(sortColors([1,0,2,1,1,0]));
