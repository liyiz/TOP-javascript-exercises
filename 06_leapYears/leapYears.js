const leapYears = function(year) {
    let isLeap = year % 4 === 0 ? true : false;
    let isCentury = year % 100 === 0 ? true : false;
    
    if (isLeap && !isCentury) {
        return true;
    }
    if (isLeap && isCentury) {
        return year % 400 === 0 ? true : false;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
