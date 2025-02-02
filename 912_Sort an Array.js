var sortArray = function(nums) {
    if (nums.length == 1) {
        return nums
    }
    if (nums.length <= 0) {
        return
    }
    let mid = Math.floor(nums.length/2)
    let left = nums.slice(0,mid)
    let right = nums.slice(mid,)
     
    left = sortArray(left) 
    right = sortArray(right) 
    
    return merge(left, right)

};

function merge(l1,r1) {
    let sorted_array = []
    let l = 0, r = 0;
    while (l<l1.length && r< r1.length) {
        if (l1[l] <= r1[r]) {
            sorted_array.push(l1[l])
            l++
        }else{
            sorted_array.push(r1[r])
            r++
        }
    }
    
    while (l<l1.length) {
        sorted_array.push(l1[l])
        l++
    }
    while(r< r1.length){
        sorted_array.push(r1[r])
        r++
    }

    return sorted_array
    
}
console.log(merge([3],[-1]));
