var removeDuplicates = function(nums) {
    let map = {}
    let arr= []
    let res = 0;
    for(let obj of nums){
        if (!map[obj]) {
            map[obj] = 1
            arr.push(obj)
            res++
        }else if(map[obj] <2) {
            map[obj] += 1
            res++
        }
        
    }
    let pointer = 0
    for (let  i = 0;  i< arr.length; i++) {
        for (let j = 0; j < map[arr[i]]; j++) {
            nums[pointer] = arr[i]
            pointer++
        }
    }
    return res
        

};

console.log(removeDuplicates([1,1,1,2,2,3]));
