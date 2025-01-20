function name(text,wild) {
    let n = text.length
    let res =[]
    for (let i = 0; i < n; i++) {
        let left = text[i]
        let right = wild[i]
        let rightSplit = right.split("*")
        let prefix = rightSplit[0]
        let suffix = rightSplit[1]
        
        if (left.startsWith(prefix) && left.endsWith(suffix)   ) {
            res.push("YES")   
        }else{
            res.push("NO")   
        }
    }

    return res
}


console.log(name(["caada","coder"],["ca*a","co*er"]));
