var myPow = function(x, n) {
    if (x == 0)  return 0
    if (n == 1)  return x
    let res;

    res = Math.abs(x) ** Math.abs(n)  
    
    if(n<0) res = 1/res
    if (x<0) {
        if (Math.abs(n)%2 !=0) {
            return - res
        }
    }
    return res
};


console.log(myPow(42.38803,1));
