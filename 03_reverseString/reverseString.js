const reverseString = function(stringInput) {
    // get length of stringInput
    // start from end of string array
    // add to a temp array
    // print out temp array
    let tempString = '';
    const stringSize = stringInput.length;
    // hello 0,1,2,3,4
    // stringSize = 5
    for (let i = 1; i < stringSize+1; i++) {
        const reversedIndex = stringSize - i;
        tempString += stringInput[reversedIndex];
    }
    return tempString;
};

// Do not edit below this line
module.exports = reverseString;
