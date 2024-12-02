const palindromes = function (input) {

    const array = Array.from(input);
    console.log(array);
    //find if there are spaces
    const hasSpaces = array.some(element => element === ' ' ? true : false);
    console.log(hasSpaces);
    //split based on spaces
    //find if there are commas
    const hasCommas = array.some(element => element === ',' ? true : false);
    console.log(hasCommas);
    //split based on commas

    //compare array and reversed array
    //if arrays match -> palindrome true
};

// Do not edit below this line
module.exports = palindromes;
