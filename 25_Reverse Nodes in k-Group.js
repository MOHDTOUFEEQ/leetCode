var reverseKGroup = function(head, k) {
    if(!head.next || k == 1 ){
      return head
  }
  let length =0 
  let curr = head
  while(curr){
      length++
      curr = curr.next
  }
  let reminder = Math.floor(length / k)
  let dummy = new ListNode(0,head)
  let prev = dummy
  curr = dummy.next
  let next;
  for(let i = 0;i<reminder;i++){
      for(let j = 1;j<k;j++){
          let holding = curr.next
          curr.next = holding.next
          holding.next = prev.next
          prev.next = holding
      }
      prev = curr
      curr = curr.next
  }
  
  return dummy.next
};