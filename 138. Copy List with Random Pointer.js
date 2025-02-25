var copyRandomList = function(head) {
    let map = new Map(); // Stores old nodes as keys and new nodes
   let curr = head;
   while (curr) {
       map.set(curr, new ListNode(curr.val));
       curr = curr.next;
   }
   curr = head
   while(curr){
       let newNode = map.get(curr)
       newNode.next = map.get(curr.next) || null;
       newNode.random = map.get(curr.random) || null;
       curr = curr.next
   }
   return map.get(head);
};