var minPathSum = function(grid) {
    for(let i = grid.length-1;i >= 0; i--){
        
        for (let j = grid[i].length-1;j>=0; j-- ){

            if (i+1 < grid.length && j + 1 < grid[i].length){
                
                grid[i][j] +=  Math.min(grid[i+1][j],grid[i][j+1])
                
            }else if (i+1 < grid.length){
                
                grid[i][j] +=  grid[i+1][j]
                
            }else if (j + 1 < grid[i].length){
                
                grid[i][j] +=  grid[i][j+1]
        
            }
        }
    }
    
    
    return grid[0][0]
};