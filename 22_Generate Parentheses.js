var generateParenthesis = function(n) {
    let res = []
    let curr = []
    function looping_till_the_end(l,k) {
        if (l == n && k ==n) {
            res.push(curr.join(""))  
            return          
        }

        if (l<n) {
            curr.push("(")
            looping_till_the_end(l+1,k)
            curr.pop()
        }
        if (k<l) {
            curr.push(")")
            looping_till_the_end(l,k+1)
            curr.pop()
        }
    }
    looping_till_the_end(0,0)


    return res
};


console.log(generateParenthesis(2));
