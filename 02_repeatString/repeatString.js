
const repeatString = function (wordToRepeat, repeatQuantity) {
    let output = "";
    if (repeatQuantity >= 0) {
        for (let i = 1; i <= repeatQuantity; i++) {
            output += wordToRepeat
        } return output
    } else {
        output = "ERROR"
        return output
    };
}

// Do not edit below this line
module.exports = repeatString;
