var letterCombinations = function(digits) {
    const mapptingDigits = { "2" : ["a","b","c"],3:["d","e","f"],4:["g","h","i"],5:["j","k","l"],6:["m","n","o"],7:["p","q","r"],8:["s","t","u"],9:["v","w","x","y","x"]}
    var result = []
    if (digits.length == 0) {
        return result
    }
    function backTack(index, curr) {
        if (curr.length == digits.length || curr.length > digits.length) {
            console.log(curr);
            
            result.push(curr.join(''))
            
            return 
        }
        
        let arr = mapptingDigits[digits[index]]

        for (let i of arr) {
            console.log(i);
            
            curr.push(i)
            backTack(index+1, curr)
            curr.pop()
        }
    }
    
    backTack(0,[])
    return result
};


console.log(letterCombinations("23"));

