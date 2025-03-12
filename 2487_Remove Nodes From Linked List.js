var removeNodes = function(head) {
    if (!head || head.next == null )return head; 
   let stack = [head.val]
   let prev = head
   let next = prev.next
   while(next){
       if(next.val<=prev.val){
       stack.push(next.val)
       }else{
           let val = next.val
           for(let i = stack.length-1;i>=0;i--){
               if(val>stack[i]){
                   stack.pop()
               }else{
                   break
               }
           }
           stack.push(val)
       }
       prev = next
       next= next.next
   }
   let dummy = new ListNode(0)
   let curr = dummy
   for(let i = 0;i<stack.length;i++){
       let val = new ListNode(stack[i])
       curr.next = val
       curr = curr.next
   }
   
   return dummy.next
};