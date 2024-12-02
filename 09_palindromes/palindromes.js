const palindromes = function (input) {
    // Create array from input string and set it to all lowercase
    // Filter array so that every character is alphabetical
    const toTest = Array.from(input.toLowerCase()).filter((char) => /[0-9A-Za-z]/.test(char));
    //compare array and reversed array
    const result = toTest.every((element, index) => element === toTest.reverse()[index]);
    //if arrays match -> palindrome true
    return result;
};

// Do not edit below this line
module.exports = palindromes;
