function del(nums, target) {
    let res = []
    let len = nums.length
    function recurr(index, curr, sum){
        if (sum == target) {
            res.push([...curr])
            console.log(res);
            
            return
        }
        if (sum > target || index > len) {
            return
        }
        curr.push(nums[index])
        recurr(index+1, curr, sum + nums[index])
        curr.pop()
        recurr(index+1, curr, sum)
    }
    recurr(0,[],0)

    return res
}

console.log(del([1,2,3,4],5));
