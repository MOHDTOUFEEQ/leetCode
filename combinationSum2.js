
var combinationSum2 = function(candidates, target) {
    let res =[]
    let len = candidates.length
    let curr = []
    let sorted_array = candidates.sort((a,b)=> a - b)
    console.log(sorted_array);
    
    function backtrack(l, sum, curr) {
        if (sum == target ) {
            res.push([...curr]);
            return
        }
        if (sum > target || l > len) {
            return 
        }

        for (let i = 0; i < sorted_array.length; i++) {
            curr.push(sorted_array[i])
            let new_sum = sum + sorted_array[i]
            backtrack(l,new_sum, curr)
            curr.pop()
            backtrack(l+1,sum, curr)

        }
    }


    backtrack(0, 0, curr)

    return res
}


console.log(combinationSum2([1,3],4));
