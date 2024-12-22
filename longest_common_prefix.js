var longestCommonPrefix = function(strs) {
    let res = ""
    console.log("1", strs[0]); 
    for (let index = 0; index < strs[0].length; index++) {
        
        for (const key of strs) {
           if (index == key.length || key[index] != strs[0][index]) {
            return res
           }
        }
        res = res+strs[0][index]
    }
    return res
};

strs = ["taaoufeeq","taazeeshan","tawdawdyahiya"]

console.log(longestCommonPrefix(strs));
