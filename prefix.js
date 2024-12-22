var longestCommonPrefix = function(strs) {
    let ans = ""
    if (strs.length == 0) {return}
    let j = 0
    
    let smalletst_string = strs.reduce((shortest, current) =>
        current.length < shortest.length ? current : shortest
    );
    let length = 0
    for (let i = 0; i < strs.length; i++) {
       if(length < strs.length){

           while(true){
            if (strs[i].startswith(smalletst_string[i] && )) {
                break
            }
           }
        }
    }



    return smalletst_string
};

console.log(longestCommonPrefix(["dog","racecar","car"]));
