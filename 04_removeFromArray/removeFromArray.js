const removeFromArray = function(inputArray, ...toRemove) {
    
    let newArray = [];
    // remove the items
    return newArray = inputArray.filter((item) => !toRemove.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
