var rotate = function(matrix) {
    let top = 0
    let left = 0
    let right = matrix[0].length -1 
    let bottom = matrix.length -1 
    
    while(top<bottom && left < right){
        let diff = right-left
        for(let i = 0; i<diff;i++){
            let first = matrix[bottom-i][left]
            let second = matrix[top][top+i]
            let third = matrix[top+i][right]
            let fourth = matrix[bottom][bottom-i]
            
            matrix[top][top+i] = first
            matrix[top+i][right] = second
            matrix[bottom][bottom-i] = third
            matrix[bottom-i][left] = fourth
            
        }
        top += 1
        left += 1
        right -= 1
        bottom -= 1
    }
    
    return matrix
};