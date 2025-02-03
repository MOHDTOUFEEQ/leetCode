var isPowerOfTwo = function(n) {
    if(n<0) return false
    if(n == 1) return true
    let minimum = 1

    while (2**minimum<=n) {
        if (2**minimum == n) {
            return true
        }else{
            minimum++
        }
    }

    return false
    
};


console.log(isPowerOfTwo(5));
