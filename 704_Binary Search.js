var search = function(nums, target) { 
   let l = 0
   let r = nums.length-1
   let mid = Math.round((l + r) / 2)
   while(l<=r){

    if (nums[mid] == target) {
        return mid 
    }

    if (nums[mid] < target) {
        
        l = mid + 1
    }else{
        r = mid - 1
    }
    mid = Math.round((l+r) / 2) 
   }
   return -1
};

console.log(search([-1,0,3,5,9,12],99));
