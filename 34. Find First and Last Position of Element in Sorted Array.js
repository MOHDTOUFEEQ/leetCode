// var searchRange = function(nums, target) {
//     let i  = 0
//     let r = nums.length - 1
//     let mid;
//     let temp=-99
//     let res = []
//     while(i<=r){
//         let mid = Math.floor((i+r)/2)
//         if(nums[mid]==target){
//             temp = mid
//             r = mid-1
//         }else if (nums[mid] < target){
//             i = mid + 1 
//         }else{
//             r = mid - 1 
//         }
        
//     }
//     if(temp == -99){
//         res.push(-1)
//     }else{
//         res.push(temp)
//     }
//     i  = 0
//      r = nums.length - 1
//     mid;
//     temp=-99
//     while(i<=r){
//         let mid = Math.floor((i+r)/2)
//         if(nums[mid]==target){
//             temp = mid
//             i = mid + 1
//         }else if (nums[mid] < target){
//             i = mid + 1 
//         }else{
//             r = mid - 1 
//         }
        
//     }
//     if(temp == -99){
//         res.push(-1)
//     }else{
//         res.push(temp)
//     }
//     return res
// };



// console.log(searchRange([2,3,3,3,10],3))

function searchRange(arr,target){
    function findIndex(val){
    let i = 0
    let r = arr.length -1 
    let mid;
    let res = -1
    while(i<r){
        mid = Math.floor((i+r)/2)
        if(arr[mid] == target){
            if(val){
                res = mid
                r = mid-1
            }else{
                res = mid
                i = mid+1
            }
        }else if (arr[mid]>target){
            r = mid+1 
        }else{
            i = mid+1
        }
    }
    return res
    
    }

    return [findIndex(true),findIndex(false)]
}


console.log(searchRange([1,2,3,3,3,4],3))