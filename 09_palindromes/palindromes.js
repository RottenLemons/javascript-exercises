const palindromes = function (str) {
    let newstr = str.replace(/[^\w]|_/g, "").toLowerCase();
    return (newstr == newstr.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
