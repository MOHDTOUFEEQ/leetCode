var threeSumClosest = function(nums, target) {
    let sorted_nums = nums.sort();
    let l = nums.length;
    let closest_sum  = 1000
    for (let i = 0; i < l-2; i++) {     
        j = i+1;
        k = l-1;
        while (j<k){
            let sum = sorted_nums[i]+ sorted_nums[j]+sorted_nums[k];
            if (Math.abs(target - sum) < Math.abs(target-closest_sum)) {
                console.log("im sum",sum)
                console.log("im closest",closest_sum);
                closest_sum = sum
                console.log(closest_sum);
                
            }                    

            if (sum<target) {
                j++
            }
            else{
                k
            }
        }

    }
    return closest_sum
    

};


console.log(threeSumClosest([0,1,0],1));
