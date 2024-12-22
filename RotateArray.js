// var rotate = function(nums, k) {
//     let len = k % nums.length 
//     for (let i = 0; i < len; i++) {
//         let r = nums.pop()
//         nums.unshift(r)
        
//     }
    
//     return nums
// };


// console.log(rotate([1,2,3],4));

var rotate = function(nums, k) {
    let len = k % nums.length 
    console.log(len);
    
    const a = nums.splice(numlen)
    console.log(a);
    
    nums.unshift(...a)
    
    return nums
};


console.log(rotate([-1,-100,3,99,2,312],2));
