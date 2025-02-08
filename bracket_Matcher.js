function BracketMatcher(str) { 
    let stack = []
    for(let i of str){
        if(i == "("){
          stack.push("(")
        }
        if(i == ")"){
          if(stack[stack.length -1] == "("){
            stack.pop()
          }else{
            return 0
          }
        }
    }
    if(stack.length != 0){
      return 0
    }
    return 1
  
  }
     
  // keep this function call here 
  console.log(BracketMatcher("string"));