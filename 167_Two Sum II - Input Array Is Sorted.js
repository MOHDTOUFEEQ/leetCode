var twoSum = function(numbers, target) {
    let i = 0
    let j = numbers.length -1 
    
    while(i<j){
        let sum = numbers[i] + numbers[j]
        console.log(i,j)
        if( sum == target){
            return [i+1,j+1]
        }
        if(sum < target){
            i++
        }else{
            
            j--
        }
    }
    
    
};


console.log(twoSum([-1,0],-1))