var isValidSudoku = function(board) {
    function check(val){
        let filltorr = val.filter((va)=> !isNaN(va)) 
        let seat = new Set(filltorr)
        if(filltorr.length != seat.size ||  val.length > 9 ||val.length < 9 ){
            return false
        }
        for (let item of seat) {
            if(!isNaN(item) && (item < 1 || item >9 )){
                return false
            }
        }
        return true
    }
    for(let i =0;i<9;i++){
        if(!check(board[i])){
            return false   
        }
    }
      for(let  j = 0;j<9;j++){
        let box = []
        for(let  i= 0;i<9;i++){
            box.push(board[i][j])
        }
        if(!check(box)){
            return false   
        }
    }
    
    for(let  i = 0;i<9; i+= 3){
        for(let  j = 0; j < 9; j+= 3){
            let box1 = []
            for(let i1 = 0;i1<3;i1++){
                for(let j1 = 0;j1<3;j1++){
                    box1.push(board[i+i1][j+j1])
                }
            }
             if(!check(box1)){
                return false   
            }
        }
    }
    
    
    return true

};