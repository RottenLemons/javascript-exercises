const fibonacci = function(a) {
    let num = +a;
    if (num <= 0) {
        return 'OOPS';
    } else if (num === 0) {
        return 0;
    }
    let b = 0;
    let c = 1;
    let temp = 0;
    for (let i = 1; i < num; i++) {
        temp = c;
        c += b;
        b = temp;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
