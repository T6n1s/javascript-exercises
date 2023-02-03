const reverseString = function(string) {
    const instr = string.split("");
    let backstr = instr.reverse();
    backstr = backstr.join("");
    return backstr;
    
};

// Do not edit below this line
module.exports = reverseString;
