const findTheOldest = function(arr) {
    return arr.sort((obj1, obj2) => {
        change1 = (obj1.yearOfDeath == undefined) ? (new Date()).getFullYear() - obj1.yearOfBirth: obj1.yearOfDeath - obj1.yearOfBirth;
        change2 = (obj2.yearOfDeath == undefined) ? (new Date()).getFullYear() - obj2.yearOfBirth: obj2.yearOfDeath - obj2.yearOfBirth;
        if (change1 > change2) {
            return -1;
        } else {
            return 1;
        }
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
