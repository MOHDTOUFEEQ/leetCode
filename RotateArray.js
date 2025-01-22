var rotate = function(nums, k) {
    
    if (k == nums.length) {
        return nums
    }else if(k<nums.length){
        let res = nums.length - k
        let curr = nums.slice(res);
        nums.splice(res,)
        nums.unshift(...curr)    
        return nums
    }else{
        let res = k % (nums.length )
        let curr = nums.slice(nums.length-res);
        nums.splice(nums.length-res,)
        nums.unshift(...curr)    
        return nums
    }
}

console.log(rotate([-1,-100,3,99,2,312],2));
