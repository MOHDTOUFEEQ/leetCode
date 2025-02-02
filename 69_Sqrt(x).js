var mySqrt = function(x) {
    let l = 1
    let r = x
    if (x == 1 || x == 0) {
        return x
    }
    let res;
    while(l<=r){
        const mid = Math.floor((l+r)/2)
        
        if (mid * mid == x) {
            return mid
        }
       
        if (mid*mid< x) {
            res = mid
            l = mid + 1
        } else{
            r = mid - 1
        }
    }

    return res
};


console.log(mySqrt(808909662));
