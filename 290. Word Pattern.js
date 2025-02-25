var wordPattern = function(pattern, s) {
    let sSplit = s.split(" ")
    if(pattern.length != sSplit.length){
        return false
    }
    let map = new Map()
    let sett = new Set()
    for(let i = 0; i<sSplit.length; i++){
        if(map.has(sSplit[i])){
            if(pattern[i] != map.get(sSplit[i])) {
                return false
            } 
        }else{
            if(sett.has(pattern[i])){
                return false
            }else{
                map.set(sSplit[i],pattern[i])
                sett.add(pattern[i])
            }
        }
    }
    return true
};