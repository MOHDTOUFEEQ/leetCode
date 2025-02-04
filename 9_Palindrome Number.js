var longestPalindrome = function (s) {
    let res = "" 
    if (s.length == 0) {
        return res
    }
    for (let i = 0; i < s.length; i++) {
        
        let l = i 
        let r = i 
        while (s[l] == s[r] && l>=0 & r < s.length) {
            if ( r - l +1 >  res.length ) {
                res = s.slice(l,r+1)
            }

            l = l-1
            r = r +1
        }

        l = i
        r = i + 1
        while (s[l] == s[r] && l>=0 & r < s.length) {
            if (r-l+2 >  res.length ) {
                res = s.slice(l,r+1)
            }
            l--
            r++
        }
        
        
    }
    return res
}   


console.log(longestPalindrome("babad"));
