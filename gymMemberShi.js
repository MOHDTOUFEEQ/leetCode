function gym(list) {
    const weekDays = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"]  
    let res = 0
    let curr_Index = null;
    for (let index = 0; index < list.length; index++) {     
        if ( curr_Index == null ||  weekDays.indexOf(list[index]) <= curr_Index ) {
            res ++;
            curr_Index = weekDays.indexOf(list[index])
            
        }else{
            curr_Index = weekDays.indexOf(list[index])
        }

        
    }

    return res
}
console.log(gym(["Sun","Sat","Fri"]));
