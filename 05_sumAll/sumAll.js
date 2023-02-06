const sumAll = function(a, b) {
    let sum = 0;
    let o = a;
    let u = b;

    if (a < 0 || typeof b === "string" || b instanceof Array) {
        return ("ERROR")
    } else if (b < a) {
        for (let i = 0; i < a; i++) {
            sum += u;
            u++;
        }
    } else {
    for (let i = 0; i < b; i++) {
        sum += o;
        o++;
    } 
    } return sum;
} ;







// Do not edit below this line
module.exports = sumAll;
