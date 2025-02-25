var hasCycle = function(head) {
    let map = new Set()
    let curr = head
    while(!map.has(curr)){
        if(!curr || !curr.next ){
            return false
        }
        map.add(curr)
        curr = curr.next
    }
    return true
};