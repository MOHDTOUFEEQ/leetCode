
var lemonadeChange = function(bills) {
    let prices = {"5":0,"10":0,"20":0}
    for(let i of bills){
        if(i == 5){
            prices["5"] += 1
        }
        
        if(i == 10){
            if(prices["5"]>0){
                prices["5"] -= 1
                prices["10"] += 1
            }else{
                return false
            }
        }
        if(i == 20){
         
            if(prices["10"]>0){
                prices["10"] -= 1
                if(prices["5"]>0){
                    prices["5"] -= 1
                }else{
                    return false
                }
            }else if(prices["5"]>=3){
                prices["5"] -= 3
            }else{
                return false
            }
        }
    }
    
    return true
};

console.log(lemonadeChange([5,5,5,20]))