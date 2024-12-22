var findLengthOfLCIS = function(nums) {
    let curr = 1
    let highest = 1
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] > nums[index-1]) {
            curr = curr + 1
        }else{
            console.log("false");
            curr = 1

        }
        highest = Math.max(highest,curr)
    }

    return highest
};

console.log(findLengthOfLCIS([1,2,3,4,5]));
