var combine = function(n, k) {
    let res = []
    
    function recurr(index, curr){
        if(curr.length == k){
            res.push([...curr])
            return 
        }
        
        for(let i = index; i<=n; i++){
            if(i == curr[curr.length -1] || i <  curr[curr.length -1] ){
                continue
            }
            curr.push(i)
            recurr(index+1, curr)
            curr.pop()
        }
    }
    recurr(1, [])
    
    return res
};