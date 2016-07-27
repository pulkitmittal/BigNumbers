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

var multiply = function(num1, num2) {
    var arr1 = String(num1).split(""),
        arr2 = String(num2).split(""),
        mul,
        result;

    mul = function(num1, num2) {
        var i, j, k, p, sum = 0, arr, carryover = 0;
        for (i = num2.length-1; i >= 0; i--) {
            arr = [];
            for (k = i; k < num2.length-1; k++) {
                arr.unshift(0);
            }
            for (j = num1.length-1; j >= 0; j--) {
                p = parseInt(num1[j], 10) * parseInt(num2[i], 10) + carryover;
                if (p >= 10 && j > 0) {
                    carryover = Math.floor(p / 10);
                    p = p % 10;
                } else {
                    carryover = 0;
                }
                Array.prototype.unshift.apply(arr, String(p).split(""));
            }
            sum = addNumbers(sum, arr.join(""));
        }
        return sum;
    };

    if (isGreater(arr1, arr2)) {
        result = mul(arr1, arr2);
    } else {
        result = mul(arr2, arr1);
    }

    // console.log("multiply", arr1, arr2, result);

    return result;
};