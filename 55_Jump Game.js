// function canJump(nums) {
//     let max_reach = 0
//     if (nums.length == 1) {
//         return true
//     }
//     for (let i = 0; i < nums.length-1; i++) {
//         console.log(nums[i], max_reach);
        
//         if ( max_reach - i == 0 && nums[i]==0) {`
//             return false
//         }
//         if ( i + nums[i] >= (nums.length-1)) {
//             console.log("hii", i, nums[i]);
            
//             return true
//         }
//         max_reach = Math.max(max_reach , nums[i] + i )
//     }

//     return false
// }


// console.log(canJump([1]))



function canJump(nums) {
    if (nums.length === 1) return true; // Only one element means you're already at the end
    
    let jump = nums.length - 1; // Start at the last position
    
    // Loop backwards from the second-to-last element to the first
    for (let i = nums.length - 2; i >= 0; i--) {
        // If we can jump from the current position to reach or go beyond our last "reachable" position
        if (nums[i] >= jump - i) { // Can we jump to the last reachable position?
            jump = i; // Update the last reachable index
        }
    }
    
    return jump === 0; // If the last reachable index is 0, we can reach the start
}


console.log(canJump([1]))