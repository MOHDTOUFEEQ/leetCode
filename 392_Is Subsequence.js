var isSubsequence = function(s, t) {
    if (t == "" && s == "") {
        return true
    }
    if (s>t  && t == "") {
        return false
    }
    if (t>s  && s == "") {
        return false
    }
    let index = 0
    let first = s[0]

    for (let i = 0; i < t.length; i+ +){
        if (t[i] == first) {
            if (index == s.length -1) {
                return true
            }        
            index++
            first = s[index]
        }  
    }
    return false
};

console.log(isSubsequence("","ahbgdc"));
