var isPalindrome = function(s) {
    let i = 0
    let j = s.length -1
    while(i<j){
        if (!/[a-zA-Z0-9]/.test(s[j])) {
            j--
            continue
        } 
        if (!/[a-zA-Z0-9]/.test(s[i])) {
            i++
            continue
        }
        if(String(s[i]).toLowerCase() == String(s[j]).toLowerCase()){
            i++
            j--
        }else{
            return false
        }
    }
    return true
};

console.log(isPalindrome("0p"));
