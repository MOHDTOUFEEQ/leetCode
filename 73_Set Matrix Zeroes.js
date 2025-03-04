var setZeroes = function(matrix) {
    let zero_rows = new Set()
    let rows = matrix.length -1
    let cols = matrix[0].length -1
    let zero_columns = new Set()
    for(let i = 0;i<=rows;i++){
        for(let j = 0;j<=cols;j++){
            if(matrix[i][j] == 0){
                if(!zero_rows.has(i)){
                    zero_rows.add(i)            
                }
                if(!zero_columns.has(j)){
                    zero_columns.add(j)            
                }
            }
        }
       }   
    for(let i = 0;i<=matrix.length -1;i++){
            for(let j = 0;j<=matrix[0].length -1;j++){
                if(zero_rows.has(i) || zero_columns.has(j)){
                    matrix[i][j] = 0
                }
        }
    }
    return matrix
}