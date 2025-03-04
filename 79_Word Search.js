var exist = function(board, word) {
    let rows = board.length , cols = board[0].length;
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    function dfs(x,y,index){
       if(index == word.length){
           return true
       }

       if(x < 0 || y<0 || x>=rows || y>=cols || visited[x][y] || board[x][y] != word[index]){
           return false
       }
       visited[x][y] = true
       let res = dfs(x+1,y,index+1) ||
                dfs(x-1,y,index+1) ||
                dfs(x,y+1,index+1) ||
                dfs(x,y-1,index+1) 
       
       visited[x][y] = false
       return res
    }
    
    for(let i = 0;i<board.length;i++){
        for(let j = 0;j<board[0].length;j++){    
            if(word.startsWith(board[i][j]) && dfs(i,j,0)){
                return true
            }
        }
    }
    return false
};
