var convert = function(s, numRows) {
    let res = Array.from({length:numRows},()=> Array())
    let a = 0
    let col = 0
    while(a<s.length){
        for(let i = 0;i<numRows;i++){
            res[i][col] = s[a]
            a++
        }
        col++
        for(let j = numRows-2; j>0;j--){
            res[j][col] = s[a]
            a++
        }
        col++
    }
    return res.flat().join("")
    
};
