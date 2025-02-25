var findPeakElement = function(nums) {
    let i = 0
    let r = nums.length - 1
    let mid;
    while(i<r){
        mid = Math.floor((i+r)/2)
        if(nums[mid] > nums[mid+1] || nums[mid+1] == undefined){
            r = mid  
        }else{
            i = mid +1 
        }
    }
    return i
};