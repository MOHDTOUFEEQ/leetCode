var candy = function(ratings) {
    let dummy = new Array(ratings.length).fill(1)
    
    for(let i = 1;i<ratings.length;i++){
        if(ratings[i] >ratings[i -1] ){
            dummy[i] = dummy[i-1]+1
        }
    }
    
    for(let j = ratings.length-2; j>=0;j--){
        if(ratings[j] >ratings[j + 1] && dummy[j] < dummy[j+1]+1 ){
            dummy[j] = dummy[j+1]+1
        }
    }
    let sum = 0
    for(let k = 0;k<dummy.length;k++){
        sum += dummy[k]
    }
    return sum
};
