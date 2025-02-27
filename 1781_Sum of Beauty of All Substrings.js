// var beautySum = function(s) {
//     let sum = 0
//     for(let i = 0; i<s.length;i++){
//         let map = {}
//         for(let j = i; j<s.length;j++){
//             let char = s[j]
//             map[char] =(map[char] || 0) + 1; 
//             let highest = -Infinity;
//             let lowest = Infinity;
//             for(let key in map){
//                 let key_val = map[key]
//                 highest = Math.max(highest,key_val) 
//                 lowest = Math.min(lowest,key_val) 
//             }
            
//             sum += (highest - lowest)
//         }
//     }
//     return sum
// };

var beautySum = function(s) {
    let sum = 0
    for(let i = 0;i<s.length;i++){
        let array = new Array(25).fill(0)
        for(let j = i;j<s.length;j++){
            array[s.charCodeAt(j) - ('a'.charCodeAt(0))]++

            let max_integer = Math.max(...array)
            let min_integer = Math.min(...array.filter((a)=> a>0))
            sum += (max_integer - min_integer)
        }
    }
    return sum 
};

console.log(beautySum("aabcbaa"))