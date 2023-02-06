    const removeFromArray = function(a, ...b) {
        let removed = a.filter((x) => !b.includes(x));
        return removed;
    }



// Do not edit below this line
module.exports = removeFromArray;
