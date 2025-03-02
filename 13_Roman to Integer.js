var romanToInt = function(s) {
    let map = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
    let res = 0
    for(let i = s.length-1;i>=0;i--){
        
        if(s[i] == "X" || s[i] == "V"){
            if(s[i-1] == "I" &&  s[i] == "V" ){
                res += 4
                i--
                continue
            }else if(s[i-1] == "I" &&  s[i] == "X"){
                res += 9
                i--
                continue
            }else{
                if(s[i]=="X"){
                    res+= 10
                }else{
                    res+= 5
                }
                continue
            }
        }
        else if (s[i] == "L" || s[i] == "C"){
            if(s[i-1] == "X" && s[i] == "L"){
                res += 40
                i--
                continue
            }else if(s[i-1] == "X" && s[i] == "C" ){
                res += 90
                i--
                continue
            }else{
                if(s[i]=="L"){
                    res+= 50
                }else{
                    res+= 100
                }
                continue
            }
        }
        else if (s[i] == "D" || s[i] == "M"){
            if(s[i-1] == "C" && s[i] == "D"){
                res += 400
                i--
                continue
            }else if(s[i-1] == "C" && s[i] == "M" ){
                res += 900
                i--
                continue
            }else{
                if(s[i]=="D"){
                    res+= 500
                }else{
                    res+= 1000
                }
                continue
            }
        }
        else{
            res+= map[s[i]]
        }
    }
    return res
};

var romanToInt = function(s) {
    let map = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
    let res = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        let curr = map[s[i]];
        let prev = map[s[i - 1]] || 0;  // Avoid undefined for out-of-bounds

        if (prev < curr) {  
            res += (curr - prev);  
            i--;  // Skip previous character
        } else {
            res += curr;
        }
    }
    
    return res;
};
