var canJump = function(nums) { 
   let jump = 0
   for (let i = 0; i < nums.length; i++) {
        let new_jump =  nums[i]
        if (jump < new_jump && new_jump == 0) {
            return false
        }
        if(new_jump >= nums.length -1 ){
            console.log(new_jump, jump);

            return true
        }
        jump = Math.max(jump, new_jump)
   }

   return false
};

console.log(canJump([3,2,1,0,4]));
