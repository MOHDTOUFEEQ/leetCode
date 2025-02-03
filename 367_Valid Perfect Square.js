function perfectSquare(num) {
    let l = 1
    let r = num
    let mid = Math.floor(num / 2)
    while (l <=r) {
        if (mid*mid == num ) {
            return true
        }
        if (mid*mid > num) {
            r = mid - 1
            
        } else {
            l = mid + 1
        }
        
        mid = Math.round((l + r ) / 2)
    }
     

    return false
}   


console.log(perfectSquare(16));

