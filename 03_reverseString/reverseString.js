const reverseString = function(stringInput) {

    let tempString = '';
    const stringSize = stringInput.length;

    for (let i = 1; i < stringSize+1; i++) {
        const reversedIndex = stringSize - i;
        tempString += stringInput[reversedIndex];
    }
    return tempString;
};

// Do not edit below this line
module.exports = reverseString;
