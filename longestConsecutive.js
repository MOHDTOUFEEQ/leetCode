var longestConsecutive = function(nums) {
    let length = nums.length
    let sorted_nums = nums.sort((a,b)=>a-b)
    let highest = 1
    let curr_streak = 0
    let least = -9999
    if (length == 0) {
        return 0
    }
    for (let index = 0; index < length; index++) {
        if (sorted_nums[index]-1 == least) {
            curr_streak = curr_streak + 1
            least = sorted_nums[index]
        } else if(sorted_nums[index] != least) {
            curr_streak = 1
            least = sorted_nums[index]
        }
        highest = Math.max(highest,curr_streak)
    }
    return highest

};

console.log(longestConsecutive([1,2,3,4,99,100,1000,1001,1002]));
