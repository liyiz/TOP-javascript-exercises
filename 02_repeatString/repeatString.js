const repeatString = function(givenString, timesToRepeat) {
    let stringToPrint = '';
    for (let i = 0; i < timesToRepeat; i++ ) {
        stringToPrint += givenString;
    }
    return stringToPrint;
};

// Do not edit below this line
module.exports = repeatString;
