function solution(A,B,X,Y){
    let firstAssembly = false
    let secondAssembly = false
    
    let cost =0 
    if(A[0] <= B[0]){
        firstAssembly = true
        cost = A[0] 
    }else{
        secondAssembly = true
        cost = B[0] 
    }
    console.log(cost)
    for(let i = 1; i<A.length;i++){
        if(firstAssembly){
            let difference = X + B[i]
            if(difference < A[i]){
                cost += difference
                firstAssembly = false
                secondAssembly = true
            }else{
                cost += A[i]
            }
        }else{
            let difference = Y + A[i]
            if(difference < B[i]){
                cost += difference
                firstAssembly = true
                secondAssembly = false
            }else{
                cost += B[i]
            }
        }
        console.log(cost)
    }
    
    return cost
}




console.log(solution([8,3,3],[6,1,10],4,3))
