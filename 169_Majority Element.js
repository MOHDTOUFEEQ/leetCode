var majorityElement = function(nums) {
    let res;
    let diff = 0 
    for (const i of nums) {
        if (diff == 0) {
            res = i
            
        }
        if (i == res) {
            diff ++
        }else{
            diff --
        }
    }

    return res
};

console.log(majorityElement([1,2,3,3,4,4]));
