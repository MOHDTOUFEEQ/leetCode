var isHappy = function(n) {
    let map = new Set()
    while(!map.has(n)){
        map.add(n)
        let str = String(n)
        let sum = 0
        for (const i of str) {
            sum += (i**2) 
        }
        
        if (sum == 1) {
            return true
        }
        n = sum
    }

    return false
};

console.log(isHappy(4));
