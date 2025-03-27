var RandomizedSet = function() {
    this.map = new Map()
    this.res = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)){
        return false
    }
    this.map.set(val,val)
    this.res.push(val)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map.has(val)){
        let 
        this.map.delete(val,val)
        return true
    }
    return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let res = [...this.map.values()]
    let random = Math.floor((Math.random() * res.length))
    return res[random]
};convert