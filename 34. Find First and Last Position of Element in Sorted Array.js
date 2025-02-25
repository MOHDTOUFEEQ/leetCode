var searchRange = function(nums, target) {
    let i  = 0
    let r = nums.length - 1
    let mid;
    let temp=-99
    let res = []
    while(i<=r){
        let mid = Math.floor((i+r)/2)
        if(nums[mid]==target){
            temp = mid
            r = mid-1
        }else if (nums[mid] < target){
            i = mid + 1 
        }else{
            r = mid - 1 
        }
        
    }
    if(temp == -99){
        res.push(-1)
    }else{
        res.push(temp)
    }
    i  = 0
     r = nums.length - 1
    mid;
    temp=-99
    while(i<=r){
        let mid = Math.floor((i+r)/2)
        if(nums[mid]==target){
            temp = mid
            i = mid + 1
        }else if (nums[mid] < target){
            i = mid + 1 
        }else{
            r = mid - 1 
        }
        
    }
    if(temp == -99){
        res.push(-1)
    }else{
        res.push(temp)
    }
    return res
};



console.log(searchRange([2,3,3,3,10],3))