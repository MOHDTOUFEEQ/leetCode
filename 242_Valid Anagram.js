var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false
    }
    let a = {}
    let b = {}
    let res = []
    
    for (const elem of s) {
        if (a[elem]) {
            a[elem] += 1
        }else{
            a[elem] = 1
            res.push(elem)
        }
    }
    for (const elem of t) {
        if (b[elem]) {
            b[elem] += 1
        }else{
            b[elem] = 1
        }
    }
    for (let i = 0; i < res.length; i++) {
        if (a[res[i]] != b[res[i]]) {
            return false
        }
    }
    return true
    
};

console.log(isAnagram("a","ab"));
