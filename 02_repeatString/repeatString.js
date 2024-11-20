const repeatString = function(givenString, timesToRepeat) {

    // Will check if input number is negative and make it positive
    if (timesToRepeat < 0) {
        return "ERROR";
    }

    let stringToPrint = '';
    for (let i = 0; i < timesToRepeat; i++ ) {
        stringToPrint += givenString;
    }
    return stringToPrint;
};

// Do not edit below this line
module.exports = repeatString;
