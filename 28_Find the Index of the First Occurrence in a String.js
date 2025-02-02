var strStr = function(haystack, needle) {
    for(let i = 0; i <haystack.length; i++){        
        let remaning = haystack.slice(i,)
        
        if(remaning.startsWith(needle)){
            return i
        }
    }
    
    return -1
};

console.log(strStr("leetcode","leeto"));
