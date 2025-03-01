function wordBreak(dict, s) {
    let res = []
    
    function recurr(index, curr){
        if(index == s.length){
        
            res.push(curr.join("").trim())
            return curr
        }
        for(let i = 0;i<dict.length;i++){
            let temp = s.slice(index)
            if(temp.startsWith(dict[i])){
                curr.push(dict[i])
                curr.push(" ")
                index += dict[i].length
                recurr(index,curr)
                index -= dict[i].length
                curr.pop()
                curr.pop()
            }
        }
    }
    recurr(0,[])
    
    return res
}


console.log(wordBreak(dict = ["apple", "pen", "applepen", "pine", "pineapple"],"pineapplepenapple"))