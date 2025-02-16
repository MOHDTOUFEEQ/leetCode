function del(nums) {
   let max_sum = nums[0]
   let curr_sum   = nums[0]

   for (let i = 1; i < nums.length; i++) {
       let sum = nums[i] + curr_sum   
         
       if (sum > curr_sum) {
            curr_sum += nums[i]
        }else{
            curr_sum = nums[i]
        }
        
        max_sum = Math.max(max_sum, curr_sum)
   }

   return max_sum
}

console.log(del( [-2,1,-3,4,-1,2,1,-5,4]));
