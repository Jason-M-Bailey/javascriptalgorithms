// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
    var zeroCount = 0;
    var oneCount = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            zeroCount++;
        } else {
            oneCount++;
        }
    }

    if (zeroCount === oneCount) {
        return true;
    } else {
        return false;
    }
    
};

