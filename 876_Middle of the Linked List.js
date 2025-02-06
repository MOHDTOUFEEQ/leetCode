var middleNode = function(head) {
    let count = 0
    let prev = head
    while(prev){
        count++
        prev= prev.next
    }
    
    let slow = head
    let fast = head
    let a = 1
    while(fast.next && fast.next.next){
        a +=   2
        slow = slow.next
        fast = fast.next.next
    }

    if(count != a){
        return slow.next
    }else{
        return slow
    }
        
};