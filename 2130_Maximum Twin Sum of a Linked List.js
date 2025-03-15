var pairSum = function(head) {
    if(head.next == null) return head.val
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    let res = -Infinity
    left = 0
    right = arr.length-1
    while(left<right){
        res = Math.max(res,arr[left]+arr[right])
        left++
        right--
    }
    return res
};