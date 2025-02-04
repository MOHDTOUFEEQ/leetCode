var divide = function(dividend, divisor) {
    let sign = true;
    const max = 2 ** 31 - 1;
    const min = -(2 ** 31);

    // Determine the sign of the result
    if ((divisor < 0 && dividend > 0) || (dividend < 0 && divisor > 0)) {
        sign = false;
    }

    // Work with absolute values
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let quotient = 0;

    // Perform division using bit manipulation
    while (a >= b) {
        let cnt = 0;

        // Find the largest shift that fits
        while (a >= (b << (cnt + 1))) {
            cnt += 1;
        }

        quotient += (1 << cnt); // Add the power of two to the quotient
        a -= (b << cnt);        // Subtract the shifted divisor
    }

    // Clamp result to 32-bit integer range
    if (quotient > max && sign === true) {
        return max;
    }
    if (quotient > max && sign === false) {
        return min;
    }

    // Apply the sign to the result
    return sign ? quotient : -quotient;
};

// Test case
console.log(divide(27, 3)); // Expected output: 7077377
