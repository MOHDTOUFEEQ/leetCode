function Palindrome(str) {
    if (str.length == 1) {
        return str
    }
    // odd
    // let curr = 0
    let res = ""
    for (let i = 0; i < str.length; i++) {
        let l = i  
        let r = i + 1
        
        while(str[l] && str[r] && str[l] == str[r]){
            console.log("dhawiha",str[l],str[r]);
            let curr = str.slice(l, r + 1);
            
            if (curr.length >= res.length) {
                console.log("im deep");
                
                res = curr
            }
            l--
            r++
        }
        // curr = curr +1
    }
    return res
}

console.log(Palindrome("aaaacabas"));
