const palindromes = function (input) {
    // Create array from input string and set it to all lowercase
    // Filter array so that every character is alphabetical
    const cleanedInput = Array.from(input.toLowerCase()).filter((char) => /[0-9A-Za-z]/.test(char));

    // Create reversed array for comparison
    const reversedInput = cleanedInput.slice().reverse();

    return JSON.stringify(cleanedInput) === JSON.stringify(reversedInput);
};

// Do not edit below this line
module.exports = palindromes;
