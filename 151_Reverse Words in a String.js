// var reverseWords = function(s) {
//     s = s.trim().split(/\s+/)
//     return s.reverse().join(" ")
// };


var reverseWords = function(s) {
    let n = s.length
    s = s.trim()
    let curr = []
    let temp = []
    for(let i = 0;i< n;i++){
        if(s[i] == s[i-1] && s[i] == " "){
            continue
            temp = []
        }else if (s[i] == " "){
            curr.push([temp.join("")])
            temp  = []
            curr.push(" ")
        }else{
            temp.push(s[i])
        }
    }
    curr.push([temp.join("")])
    return curr.reverse().join("")
};