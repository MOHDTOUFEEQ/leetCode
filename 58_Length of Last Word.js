var lengthOfLastWord = function(s) {
    let b = s.trim()
    let a = b.split(" ");
    
    return a[a.length-1].length
    
};

console.log(lengthOfLastWord(" fly me   to   the moon  "));
