const fibonacci = function(num) {
    // num is max length
    let fibonacci = [1, 1]; //add F1 and F2 of fibonacci sequence - outliers
    let i = 2; // start looping on F3 of fibonacci sequence
    
    while (i < num) {
        let sum = 0;
        sum = fibonacci[i-1] + fibonacci[i-2]
        fibonacci.push(sum);
        // console.log(sum);
        // console.log(fibonacci);
        i++
    };

    return fibonacci[num-1];

};

// Do not edit below this line
module.exports = fibonacci;
