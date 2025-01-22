var reverse = function(x) {
    let output;
    if (x<0) {
        let abs = Math.abs(x)
        let string = abs+""
        let res =string.split("").reverse()
        
        for (let obj of res) {
           if (obj == 0) {
            res.unshift()
           }else{
            break
           }
            
        }
        output =   -Number(res.join(""))
    } else {
        let abs = Math.abs(x)
        let string = abs+""
        let res =string.split("").reverse()
        
        for (let obj of res) {
            if (obj == "0") {
                res.unshift()
            }else{
                break
            }
            
        }
    output=  Number(res.join(""))

    }
    if (output< ( (-2)**31) || output > ( ((2)**31))-1) {
        return 0
    }
    return output
};

console.log(reverse(-65090));
