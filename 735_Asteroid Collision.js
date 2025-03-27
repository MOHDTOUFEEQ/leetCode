/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    stack = []

    for (let i of asteroids){
        while (stack.length >0 && i<0 && stack[stack.length-1] >0){
            if(Math.abs(stack[stack.length-1]) == Math.abs(i)){
                i = 0
                stack.pop()
                break
            }else if (Math.abs(stack[stack.length-1]) > Math.abs(i)){
                i = 0
                break
            }else if(Math.abs(stack[stack.length-1]) < Math.abs(i)){
                stack.pop()
            }
        }

        if (i != 0 ) {
            stack.push(i)
        }
    }
    return stack
};



console.log(asteroidCollision([5,-5,10]))
