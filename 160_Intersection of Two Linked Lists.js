var getIntersectionNode = function(headA, headB) {
    let curr = headA
    let map = new Set()
    while(curr){
        map.add(curr)
        curr = curr.next
    }
    let curr1 = headB

    while(curr1){
        if(map.has(curr1)){
            return curr1
        }
        curr1 = curr1.next
    }

    return null

};