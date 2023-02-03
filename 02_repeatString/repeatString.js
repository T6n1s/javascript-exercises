const repeatString = function(string, n) {
    let str = string;
    if (n > 0) {
    for (let x = 1; x < n; x++) {      
        str += string; 
    } return str;
} else if (n === 0) {
    return "";
} else if (n < 0) {
    return "ERROR";
}
};

// Do not edit below this line
module.exports = repeatString;
