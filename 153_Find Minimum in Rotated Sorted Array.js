// var findMin = function(nums) {
//     let l = 0
//     let r = nums.length - 1     
//     while(l<r){
//         let mid = Math.min((l+r)/2);
//         if (nums[mid]>nums[r]) {
//             l = mid+1
//         }else{
//             r = mid
//         }
//     }
    
//     return nums[l]
// };


// console.log(findMin([3,4,5,1,2]));


var findMin = function(nums) {
    let l = 0
    let r = nums.length - 1     
    while(l<r){
        let mid = Math.floor((l+r)/2);
        if(nums[l]>nums[mid] && nums[mid]<nums[r] && nums[mid]<nums[mid-1]){
            return nums[mid]
        }
        if (nums[mid] >= nums[l]) {
            if (nums[l] < nums[r]) {
                return nums[l]
            }else{
                l = mid+1
            }
        }else{
            if (nums[mid-1] < nums[mid]) {
                r = mid-1
            }else{
                l = mid + 1
            }
        }
    }
    
    return nums[l]
};


console.log(findMin([3,4,5,1,2]));
