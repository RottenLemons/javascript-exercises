const removeFromArray = function(arr, ...args) {
    for (const arg of args) {
        s = arr.indexOf(arg);
        if (s != -1) {
            arr.splice(s, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
