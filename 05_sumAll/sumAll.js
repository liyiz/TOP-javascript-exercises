const sumAll = function(a, b) {
    if (isNaN(a) || 
        isNaN(b) || 
        !Number.isInteger(a) || 
        !Number.isInteger(b) ||
        Math.sign(a) === -1  ||
        Math.sign(b) === -1
    ) {
        return 'ERROR';
    }

    let highNum = Math.max(a, b);
    let lowNum = Math.min(a, b);
    let sumTotal = 0;

    for (let i = lowNum; i <= highNum; i++) {
        sumTotal += i;
    }

    return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
