var deleteDuplicates = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (prev && prev.next) {
        const first = prev.next;
        let second = prev.next.next;
        
        // Ensure 'second' exists before accessing its properties
        if (second && first.val === second.val) {
            // Skip all duplicates of the current value
            while (second && first.val === second.val) {
                second = second.next;
            }
            // Connect 'prev' to the node after the last duplicate
            prev.next = second;
        } else {
            // Move 'prev' to the next node if no duplicates
            prev = prev.next;
        }
    }
    
    return dummy.next;
};