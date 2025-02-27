var hIndex = function(citations) {
    let new_array = new Array(citations.length+1).fill(0)
    
    for(let i = 0;i<citations.length;i++){
        if(citations[i] < new_array.length){
            new_array[citations[i]]++
        }else{
            new_array[new_array.length-1]++
        }
    }
    let reminder = 0
    for(let j = new_array.length -1; j>=0;j--){
        if(reminder+new_array[j] >= j){
            return j
        }else{
            reminder += new_array[j]
        }
    }
    return  new_array
};
