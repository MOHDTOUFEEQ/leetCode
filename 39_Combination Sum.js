// @param {number[]} candidates
// * @param {number} target
// * @return {number[][]}
var combinationSum = function(candidates, target) {
    let res = []
    function iterating(index, curr, total) {
        if (total == target ) {
        
            
            res.push([...curr])
            console.log(typeof res[0])
            return
        }
        if ( total > target || index >=  candidates.length ) {
            return
        }
        curr.push(candidates[index])
        iterating(index,curr,total + candidates[index])
        curr.pop()

        iterating(index + 1,curr,total)
    }

    iterating(0,[],0)
    return res
};


console.log(combinationSum([2,3,4,7],4));
