var merge = function(nums1, m, nums2, n) {
    if(n == 0){
        return nums2
    }
    let a = nums1.length

    nums1.splice(a-n)
    let copy = [...nums1]
    let i  = 0
    let r  = 0
    
    for(let k = 0; k< a ;k++){
        if(copy[i]<nums2[r] || nums2[r] == undefined){
            nums1[k] = copy[i]
            i += 1
        }else{
            nums1[k] = nums2[r]
            r +=1
        }
        
    }
    return nums1
};
