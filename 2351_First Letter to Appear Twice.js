var repeatedCharacter = function(s) {
    let map = {}
    for(let i = 0; i < s.length; i++){
        if (s[i] in map) {
            return s[i]
        }else{
            map[s[i]] = 1
        }
    }
};

console.log(repeatedCharacter("nwcn"));
