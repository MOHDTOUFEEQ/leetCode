class ListNode{
    constructor(key,val){
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}
var LRUCache = function(capacity) {
    this.max_size = capacity
    this.map = new Map()
    this.head = new ListNode(0,0)
    this.tail = new ListNode(0,0)
    this.head.next = this.tail
    this.tail.prev = this.head
    

};
LRUCache.prototype.removeLast = function(node) {
     let next1  = node.next
        let prev1 = node.prev 
        prev1.next = next1
        next1.prev = prev1
};

LRUCache.prototype.keepFirst = function(node) {
    let next2 = this.head.next
        node.next = next2
        next2.prev = node
        node.prev = this.head
        this.head.next = node
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)){

    this.removeLast(this.map.get(key))
    this.keepFirst(this.map.get(key))
    
    return this.map.get(key).val  
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
      if(this.map.has(key)){
           let vall = this.map.get(key)
           vall.val = value
           this.removeLast(vall)
           this.keepFirst(vall)
           this.map.set(key,vall)
           return
       }
       if(this.map.size >= this.max_size ){
           let proov = this.tail.prev
           this.removeLast(proov)
           this.map.delete(proov.key)
           let neww = new ListNode(key,value)
           this.keepFirst(neww)
           this.map.set(key,neww)
       }else{
           let neww = new ListNode(key,value)
           this.keepFirst(neww)
           this.map.set(key,neww)
       }
    };
