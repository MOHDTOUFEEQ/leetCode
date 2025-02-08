function maxArea (height) {
  
let left = 0
let right = height.length - 1
let area = 0
while(left< right){
  let width = right - left
  let max_height = Math.min(height[left], height[right])
  let new_area = width * max_height
  area = Math.max(area,new_area)
  if (height[left] < height[right]) {
      left++
  }else{
      right--
  }
}
return area

};


console.log(maxArea([1,1]));
