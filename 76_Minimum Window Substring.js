var minWindow = function(s, t) {
    if(s.length <t.length ) return ""
    
    let t_map = new Map(),  t_count = 0
    for(let val of t){
        if(!t_map.has(val)){
            t_map.set(val,1)
            t_count++
        }else{
            t_map.set(val,t_map.get(val)+1)
        }
    }
    let max_length = Infinity, left = 0, min_left = 0, min_right = 0, right = 0
    let str = "", s_map = new Map(), s_count = 0 
    while(right<s.length){
         s_map.set(s[right], (s_map.get(s[right]) || 0) + 1);
        if(t_map.has(s[right]) && s_map.get(s[right]) == t_map.get(s[right])){
            s_count++
        }
        while(s_count == t_count){
            if(right-left+1 <= max_length){
                max_length = right-left+1
                min_left = left 
                min_right = right
            }
            let val = s[left]
            left++
            s_map.set(val,s_map.get(val)-1)
            if(t_map.has(val) && s_map.get(val)<t_map.get(val)){
                s_count -= 1
                break
            }
        }
        right++
    }
    if(max_length == Infinity)  return ""

    return s.slice(min_left,min_right+1)
    
}