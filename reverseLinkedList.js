var reverseList = function(head) {

    let dummy = new ListNode(0)
    let dummy_controller = dummy
    let curr = head
    console.log(curr)
    while(curr!=null){
        let first_node = curr
        curr = curr.next
        first_node.next = null
        let dummy_next = dummy.next
        dummy.next =  first_node
        dummy.next.next = dummy_next
    }
    return dummy.next
};