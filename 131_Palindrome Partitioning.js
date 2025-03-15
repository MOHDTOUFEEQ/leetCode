var partition = function(s) {
    res = []
    
    function backtracking(curr,index){
        if(index == s.length){
            res.push([...curr])
            return
        }
        
        for(let i = index;i<s.length ;i++){
            let string = s.substring(index, i+1)
            if(string == string.split("").reverse().join("")){
                curr.push(string)
                backtracking(curr,i+1)
                curr.pop()
            }
        }
    }
    
    backtracking([],0)
    return res
};