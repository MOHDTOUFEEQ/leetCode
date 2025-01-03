function subSet(nums) {
    let res = []
    let len = nums.length
    let curr = []
    function recurse(l) {
        if (l == len) {
            res.push([...curr])
            return
        }

        recurse(l+1)
        curr.push(nums[l])
        recurse(l+1)
        curr.pop()
    
    }
    recurse(0)
    return res
}

console.log(subSet([1,2,3]));
