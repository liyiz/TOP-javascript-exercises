const removeFromArray = function(inputArray, ...toRemove) {
    // create array from input arguments "toRemove"
    let args = Array.from(toRemove);
    
    // temporary array to collect indexes of items to be removed from inputArray
    let indexesToRemove = [];
    // compare inputArray and args
    for (let i = 0; i < args.length; i++) {

        for (let j = 0; j < inputArray.length; j++) {
            if (args[i] === inputArray[j]) {
                // save positions of items to remove
                indexesToRemove.push(j);
            }
        }

    }
    
    console.log(indexesToRemove);

    // remove the items
    const newArray = inputArray.filter((item) => !args.includes(item))

    // return the final desired array
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
