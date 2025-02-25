// var strWithout3a3b = function(a, b) {
//     let res = "";
    
//     while (a > 0 || b > 0) {
//         let insertA = false;
        
//         if (a > b) { 
//             insertA = true; // Prefer 'a' if there are more 'a's
//         } else if (b > a) {
//             insertA = false; // Prefer 'b' if there are more 'b's
//         } else { 
//             // If a == b, alternate to avoid "aaa" or "bbb"
//             insertA = res.length === 0 || res[res.length - 1] !== 'a';
//         }

//         if (insertA) {
//             if (res.length >= 2 && res[res.length - 1] === 'a' && res[res.length - 2] === 'a') {
//                 res += "b"; // Avoid "aaa"
//                 b--;
//             } else {
//                 res += "a";
//                 a--;
//             }
//         } else {
//             if (res.length >= 2 && res[res.length - 1] === 'b' && res[res.length - 2] === 'b') {
//                 res += "a"; // Avoid "bbb"
//                 a--;
//             } else {
//                 res += "b";
//                 b--;
//             }
//         }
//     }

//     return res;
// };
var strWithout3a3b = function(a, b) {
    let n = a+b
    let a1 = false;
    let b1 = false;
    if(a>=b){
        a1 = true
    }else{
        b1 = true
    }
    let res =""
    let count = 0
    for(let i = 0; i<n;i++){
        if(a1 && count<2){
            res += "a"
            count++
            a--
            if(a == 0){
                count = 0
                b1 = true
                a1 = false
                continue
            }else if (count == 2){
                    if(a>b){
                    count = 1
                    b1 = true
                    a1 = false
                    continue
                }
                count = 0
                b1 = true
                a1 = false
                continue
            }
            
        }else if (b1 && count<2){
            res += "b"
            count++
            b--
            if(b == 0){
                count = 0
                a1 = true
                b1 = false
            }else if(count == 2){
                if(b>a){
                    count = 1
                a1 = true
                b1 = false
                }else{
                count = 0
                a1 = true
                b1 = false
                }
            }
        }
        
    }
    return res
};