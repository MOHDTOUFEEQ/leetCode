
var combinationSum2 = function(candidates, target) {
    let res = []
    const sorted_array = candidates.sort((a,b)=>a-b)
    function backTack(index, sum ,curr) {
        console.log("im target", target,"im curr.kenght", curr.length, curr, "candidaates.length", candidates.length, "u=im sum", sum);
        if (sum == target) {
            console.log("im curr.kenght", curr.length, curr, "candidaates.length", candidates.length, "u=im sum", sum);
            res.push([...curr])
            
            return
        }
        
        if (sum > target || index >= candidates.length || curr.length >= candidates.length) {
            return
        }

        for (let i = index; i < sorted_array.length; i++) {
            if (i>index, sorted_array[i] == sorted_array[i-1]) {
                continue
            }
            curr.push(sorted_array[i])
            sum = sum + sorted_array[i]
            backTack(i,sum , curr)
            curr.pop()
        }
    }
    backTack(0,0, [])
    return res
}


console.log(combinationSum2([1,1,1],2));
