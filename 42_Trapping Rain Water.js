// // var trap = function(height) {
// //     let total = 0
// //     let left_val = 0
// //     let initial = true
// //     for (let mid = 0; mid < height.length; mid++) {
// //         if (initial && height[mid] <= left_val) {
// //             continue
// //         }
// //         initial == false
// //         let l = mid
// //         let r = -1
// //         let maxHeight = -1
// //         for (let n = mid+1; n < height.length; n++) {
// //             if (height[n] >= height[l]) {
// //                 r = n
// //                 break
// //             }
// //             if (height[n] > maxHeight) {
// //                 maxHeight = height[n]
// //                 r = n
// //             }            
// //         }
        
// //         if (maxHeight != -1) {
// //             let min = Math.min(height[l],height[r])
// //             for (let t = l+1; t < r; t++) {
// //                 total += (min - height[t])
// //             }
// //             mid = r-1
// //         } 
// //     }
// //     return total

// // };

// // console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))



// var trap = function(height) {
//     let total = 0
    
//     let leftPrefixSum = leftPrefixSumfunk(height) 
//     let rightPrefixSum = rightPrefixSumfunk(height) 

//     console.log(leftPrefixSum, rightPrefixSum);
    
// };

// function leftPrefixSumfunk(height) {
//     let arr =  []

//     for (let i = 0; i < height.length; i++) {
//         if (i == 0) {
//             arr.push(height[i])
//         }else{
//             arr[i] = Math.max(height[i-1], height[i])
//         }

//     }
//     return arr
// }
// function rightPrefixSumfunk(height) {
//     let arr =  []

//     for (let i = height.length-1; i >= 0 ; i--) {
//         if (i == 0) {
//             arr.push(height[i])
//         }else{
//             arr[i] = Math.max(height[i-1], height[i])
//         }

//     }
//     return arr    
// }
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))



// var trap = function(height) {
//     let total = 0
//     let left_val = 0
//     let initial = true
//     for (let mid = 0; mid < height.length; mid++) {
//         if (initial && height[mid] <= left_val) {
//             continue
//         }
//         initial == false
//         let l = mid
//         let r = -1
//         let maxHeight = -1
//         for (let n = mid+1; n < height.length; n++) {
//             if (height[n] >= height[l]) {
//                 r = n
//                 break
//             }
//             if (height[n] > maxHeight) {
//                 maxHeight = height[n]
//                 r = n
//             }            
//         }
        
//         if (maxHeight != -1) {
//             let min = Math.min(height[l],height[r])
//             for (let t = l+1; t < r; t++) {
//                 total += (min - height[t])
//             }
//             mid = r-1
//         } 
//     }
//     return total

// };

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))



var trap = function(height) {
    let total = 0
    for (let l = 0; l < height.length; l++) {
        if (height[l] == 0) {
            continue
        }
        let r = -1
        let max = 0
        for (let n = l+1; n < height.length; n++) {
            if (height[n] >= height[l]) {
                r = n
                break
            }
            if (height[n] > max) {
                r = n 
            }
        }
        
        if (r != -1) {
            for (let m = l+1; m < r; m++) {
                total += (max - height[m])
            }
        }
        l = r-1
        
    }
    return total
}
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))



