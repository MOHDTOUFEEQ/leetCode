
var validPalindrome = function(s) {
  let l = 0
  let r = s.length -1
    
  while(l<r){
    if (s[l] == s[r]) {
        l++
        r--
        
    }else{
        
        return (check(s,++l , r) || check(s,--l,--r))
    }
  }
  return true
};
function check(s,left,right) {
    while(left<right){
        
      if (s[left] != s[right] ) {
          return false
      }
      left++
      right--
    }
    return true
}

console.log(validPalindrome("cbbcc"));
