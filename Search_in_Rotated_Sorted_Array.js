var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1

    while (l<=r) {
        const mid =  Math.floor((l+r)/2)
        console.log("im nums[mids",nums[mid]);
        
        if (nums[mid] == target){
            return mid
        }

        if (target < nums[mid] && target >= nums[l]) {
            r = mid -1
            console.log(nums[r]);
            console.log("up");
            
        }
        else{
            l = mid + 1
            console.log(nums[l]);
        }
    }
    return -1
};


console.log(search([1,3,5,7,10],10));
