var isGreater = function(num1, num2) {
    if (num1.length > num2.length) {
        return true;
    }
    if (num1.length < num2.length) {
        return false;
    }
    for (i = 0; i < num1.length; i++) {
        if (num1[i] !== num2[i]) {
            if (num1[i] > num2[i]) {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
};

var addNumbers = function(num1, num2) {
    var arr1,
        arr2,
        arr3,
        max,
        i,
        sum,
        subtract,
        normalize,
        trimLeadingZeros;

    arr1 = String(num1).split("");
    arr2 = String(num2).split("");

    trimLeadingZeros = function(num) {
        while (num.length > 1) {
            if (parseInt(num[0], 10) !== 0) {
                break;
            }
            num.shift();
        }
        return num;
    };

    sum = function(num1, num2) {
        var result = [];
        // basic summation starting from unit position
        for (i = num1.length-1; i >= 0; i--) {
            result[i] = result[i] || 0;
            result[i] += parseInt(num1[i], 10) + parseInt(num2[i], 10);
            if (result[i] >= 10 && i > 0) {
                result[i] = result[i] % 10;
                result[i-1] = 1;
            }
        }
        return result;
    };

    subtract = function(num1, num2) {
        var result = [];
        for (i = num1.length-1; i >= 0; i--) {
            result[i] = result[i] || 0;
            result[i] = parseInt(num1[i], 10) - parseInt(num2[i], 10);
            if (result[i] < 0) {
                result[i] += 10;
                num1[i-1] = (parseInt(num1[i-1], 10) || 0) - 1;
            }
        }
        return trimLeadingZeros(result);
    };

    normalize = function() {
        while (arr1.length !== arr2.length) {
            if (arr1.length > arr2.length) {
                arr2.unshift("0");
            } else {
                arr1.unshift("0");
            }
        }
    };

    if (arr1[0] === "-" && arr2[0] === "-") {
        arr1.shift();
        arr2.shift();
        normalize();
        arr3 = sum(arr1, arr2);
        arr3.unshift("-");
    } else if (arr1[0] === "-") {
        arr1.shift();
        if (isGreater(arr1, arr2)) {
            normalize();
            arr3 = subtract(arr1, arr2);
            arr3.unshift("-");
        } else {
            normalize();
            arr3 = subtract(arr2, arr1);
        }
    } else if (arr2[0] === "-") {
        arr2.shift();
        if (isGreater(arr2, arr1)) {
            normalize();
            arr3 = subtract(arr2, arr1);
            arr3.unshift("-");
        } else {
            normalize();
            arr3 = subtract(arr1, arr2);
        }
    } else {
        normalize();
        arr3 = sum(arr1, arr2);
    }

    // console.log("sum", num1, num2, arr3);

    return arr3.join("");
};