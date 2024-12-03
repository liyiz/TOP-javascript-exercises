const fibonacci = function(num) {

    // Check for string entry and convert to integer
    if (num === NaN) {
        num = parseInt(num);
    }
    // Check if num is negative
    if (num < 0) {
        return "OOPS";
    }

    // num is max length
    let fibonacci = [0, 1]; //add F0 and F1 of fibonacci sequence - outliers
    let i = 2; // start looping on F3 of fibonacci sequence
    
    while (i < num + 1) {
        let sum = 0;
        sum = fibonacci[i-1] + fibonacci[i-2]
        fibonacci.push(sum);
        // console.log(sum);
        // console.log(fibonacci);
        i++
    };

    return fibonacci[num];

};

// Do not edit below this line
module.exports = fibonacci;
