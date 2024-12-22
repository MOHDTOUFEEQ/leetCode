var permute = function(nums) {
    let res =[]
    function recurse(path,used) {
        if (path.length == nums.length) {
            res.push([...path])
            return
        }        

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue
            }
            path.push(nums[i])
            used[i] = true

            recurse(path, used)

            path.pop()
            used[i] = false
        }
    }

    recurse([],Array.from(nums).fill(false))
    
    return res
};


console.log(permute([1,2,3]));

// let nums = [1,2,3]
// console.log(Array.from(nums).fill(false));
