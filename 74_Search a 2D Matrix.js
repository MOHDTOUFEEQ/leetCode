var searchMatrix = function(matrix, target) {
    let left = 0
    let right = matrix.length-1
    let mid;
    
    while(left<right){
        mid = Math.floor((left+right)/2)
        if(matrix[mid][matrix[mid].length-1] >= target){
            right = mid
        }else{
            left = mid+1
        }
    }
    
    console.log(matrix[left])
    let l = 0
    let r = matrix[left].length -1
    
    while(l<=r){
        mid = Math.floor((l+r)/2)
        if(matrix[left][mid] == target){
            return true
        }else if(matrix[left][mid]>target){
            r = mid - 1
        }else{
            l = mid + 1
        }
    }
    
    
    return false
};