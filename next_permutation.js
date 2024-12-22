var nextPermutation = function(nums) {
    let i = -1;
    let l = nums.length;

    // Find the first decreasing element from the right
    for (let index = l - 2; index >= 0; index--) {
        if (nums[index] < nums[index + 1]) {
            i = index;
            break;
        }
    }

    // If no such element is found, the array is the last permutation
    if (i === -1) {
        nums.reverse(); // Reverse the entire array to get the smallest permutation
        return nums;
    }

    // Find the smallest element in the right subarray that is greater than nums[i]
    for (let index = l - 1; index > i; index--) {
        if (nums[index] > nums[i]) {
            // Swap nums[index] and nums[i]
            [nums[i], nums[index]] = [nums[index], nums[i]];
            break;
        }
    }

    // Reverse the subarray to the right of index `i`
    const left = nums.slice(0, i + 1); // Elements before and including `i`
    const right = nums.slice(i + 1);   // Elements after `i`

    // Reverse the right portion and concatenate
    return left.concat(right.reverse());
};

// Example Usage
console.log(nextPermutation([2, 3, 1])); // Output: [2, 1, 3]
