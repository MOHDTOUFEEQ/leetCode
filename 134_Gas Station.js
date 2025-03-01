var canCompleteCircuit = function(gas, cost) {
    let diff = 0
    for(let i = 0;i<gas.length;i++){
        diff += (gas[i] - cost[i])
    }
    if(diff<0){
        return -1
    }
    let pos_index = 0
    let curr_diff = 0
    for(let j = 0;j<gas.length;j++){
        curr_diff += (gas[j] - cost[j])
        if(curr_diff <0){
            pos_index = j+1
            curr_diff = 0    
        }
    }
    return pos_index
};