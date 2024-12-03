const findTheOldest = function(array) {
    const oldest = array.sort((a, b) => {
        // get current year
        const currentYear = (new Date()).getFullYear();
        let yearCapA = null;
        let yearCapB = null;

        // if yearOfDeath not available
        // assign current date
        if (a.yearOfDeath === undefined) {
            yearCapA = currentYear;
        } else {
            yearCapA = a.yearOfDeath;
        }
        if (b.yearOfDeath === undefined) {
            yearCapB = currentYear;
        } else {
            yearCapB = b.yearOfDeath;
        }
        
        const lastPerson = yearCapA - a.yearOfBirth;
        const nextPerson = yearCapB - b.yearOfBirth;
        a.age = lastPerson;
        b.age = nextPerson;
        return lastPerson > nextPerson ? -1 : 1;
    })
    // passes the whole object (type) AND THEN
    // compares each object's property (number to number)
    // then picks a or b to keep in the newly made array.
    .reduce((a, b) => a.age > b.age ? a : b); 

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
