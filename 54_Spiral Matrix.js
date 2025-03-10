var spiralOrder = function(matrix) {
    let res = [] 
    let top = 0
    let left  =  0
    let right = matrix[0].length - 1
    let bottom = matrix.length - 1
    while(left<=right && top <=bottom){
        for(let r = left ;r<= right;r++){
            res.push(matrix[top][r])
        }
        top++
        for(let b = top ; b<=bottom;b++){
            res.push(matrix[b][right])
        }
        right--
        if(top<=bottom){
            for(let l = right ; l>=left;l--){
                res.push(matrix[bottom][l])
            }
            bottom--
        }
        if(left<=right){
            
        for(let t = bottom ; t >=top;t--){
            res.push(matrix[t][left])
        }
        left++
        }
        
    }
    
    return res
    
};