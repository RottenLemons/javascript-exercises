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

// const findTheOldest = function(array) {
//     return array.reduce((oldest, currentPerson) => {
//       const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//       const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//       return oldestAge < currentAge ? currentPerson : oldest;
//     })
//   };
  
//   const getAge = function(birth, death) {
//     if (!death) {
//       death = new Date().getFullYear();
//     }
//     return death - birth;
//   };

// Do not edit below this line
module.exports = findTheOldest;
