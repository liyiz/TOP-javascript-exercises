const removeFromArray = function(inputArray, ...toRemove) {
    // create array from input arguments "toRemove"
    let args = Array.from(toRemove);
    
    // remove the items
    const newArray = inputArray.filter((item) => !args.includes(item))

    // return the final desired array
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
