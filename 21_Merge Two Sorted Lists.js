function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function createLinkedList(arr) {
    let dummy = new ListNode(-1);
    let current = dummy;
    
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next; // Return the head of the linked list
}

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        console.log(current);
        current = current.next;
        console.log(current);
        
    } 

    current.next = list1 !== null ? list1 : list2;

    return dummy.next;
}

function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Create sample linked lists
let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);
console.log(list1);

// Merge the lists
let mergedList = mergeTwoLists(list1, list2);

// Print the merged list
printLinkedList(mergedList);
