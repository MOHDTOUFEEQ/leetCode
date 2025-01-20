function name(n) {
    for (let i = 1; i < n.length; i++) {
        if (n[i] < n[i-1]) {
            const diff = n[i-1] - n[i]
            n[i] += diff
            for (let j = i+1; j < n.length; j++) {
                n[j] += diff                
            }
        }
    }

    return n
}


console.log(name([9,2,3]));
