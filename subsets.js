function subSet(params) {
    let res = []
    let len = params.length
    let curr = []
    function recurse(l) {
        if (l == len) {
            res.push([...curr])
            return
        }

        recurse(l+1)
        curr.push(params[l])
        recurse(l+1)
        curr.pop()
    
    }
    recurse(0)
    return res
}

console.log(subSet([1,2,3]));
