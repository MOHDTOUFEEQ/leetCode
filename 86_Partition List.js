var partition = function(head,x) {
    if (head === null || head.next === null) {
       return head;
   }
   let left = new ListNode(0)
   let left_pointer = left
   let right = new ListNode(0)
   let right_pointer = right
   let curr = head
   while(curr){
       if(curr.val < x){
           left_pointer.next =  new ListNode(curr.val)
           left_pointer = left_pointer.next
       }else if(curr.val >= x){
           right_pointer.next = new ListNode(curr.val)
           right_pointer = right_pointer.next
       }
       curr = curr.next
   }
  if(right.next){
       left_pointer.next = right.next
   }
   
   return left.next
};