// var lengthOfLongestSubstring = function(s) {
//     let curr = ""
//     let res = 0
    
//     for (let i = 0; i < s.length; i++) {
        
//         if (curr.includes(s[i])) {
//             curr = curr.substring(curr.indexOf(s[i])+1)
//             curr += s[i]
//         }else{
//             curr += s[i]
//         }
        
//         res = Math.max(res, curr.length)
//     }


//     return res
// };


// console.log(lengthOfLongestSubstring("dvde"));


var lengthOfLongestSubstring = function(s) {
    let i = 0
    let r = 1
    let res = 0
    

    while(i<=r || r < s.length ){
        if(s[r] == s[i]){
            i = r
            r += 1
        }else{
            r += 1
        }
        res = Math.max(res, (r-i)+1)
    }


    return res
};


console.log(lengthOfLongestSubstring("dvde"));
