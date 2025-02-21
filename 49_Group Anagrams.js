var groupAnagrams = function(strs) {
    let ans = []
    let map = {}
    let c = []
    for (const i of strs) {
        let a = i.split("").sort().join("")
        if (map[a]) {
            map[a] += 1
            let j;
            for (let i = 0; i < c.length; i++) {
                if (c[i] == a ) {
                    j = i
                }
            }
            ans[j].push(i)
        }else{
            map[a] = 1
            c.push(a)
            ans.push([i])
        }
    }

    return ans
    
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
