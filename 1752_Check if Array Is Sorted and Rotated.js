var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1

    while (l<=r) {
        const mid =  Math.floor((l+r)/2)
        if (nums[mid] == target) {
            return mid
        }
        console.log(nums[mid]);
        
        if (nums[l]<=nums[mid] ) {
            if (target < nums[mid] && target >= nums[l]) {
                r = mid-1
            } else {
                l = mid + 1
            }
        }
        else{
            if (target > nums[mid] && target <= nums[r]) {
                l = mid + 1
            } else {
                r = mid - 1
            }

        }
        
};
return -1
}


console.log(search([3,8],8));
