var uniqueOccurrences = function(arr) {
    let mapping = {}
    let const_didits = []
    for (const i of arr) {
        
        if (i in mapping) {
            mapping[i]++ 
        }else{
            mapping[i] = 1
            const_didits.push(i)
        }
    }

    for (let i = 0; i < const_didits.length; i++) {
        let base = mapping[const_didits[i]]
        for (let j = 0; j < const_didits.length; j++) {
            if (i == j ) {
                continue
            }
            let curr = mapping[const_didits[j]]
            if (base == curr) {
                return false
            } 
        }        
    }
    
    
    return true
    

};

console.log(uniqueOccurrences([1,2,2,3,3,3,2]));
