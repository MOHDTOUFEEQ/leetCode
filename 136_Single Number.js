var singleNumber = function(nums) {
    let res = 0;
   for(let i of nums){
       res =  res ^ i 
   }
   
   return res
};

console.log(singleNumber([1,2,2]));
