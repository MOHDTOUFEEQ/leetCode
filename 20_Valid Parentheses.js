var isValid = function(s) {
    let stack = []
    let hsasing = { '}' : "{" , "]" : "[", ")" : "(" }
    if (s.length %2 == 1) {
        return false
    }
    for (const key of s) {
        console.log(key);
        
        if (key in hsasing) {
            console.log(stack);
            console.log("dhfthf",stack.slice(-1).join(''),hsasing[key] );

            if (stack && stack.slice(-1).join('') == hsasing[key]) {
                console.log("dhfthf",stack);
                stack.pop()
            }
            else{
                return false
            }
        }
        else{
            stack.push(key)       
            console.log("im stack", stack);
        }
        
    }
    
    if (stack.length> 0) {
        return false
    } else {
        return true
    }
};

console.log(isValid("{}"));
