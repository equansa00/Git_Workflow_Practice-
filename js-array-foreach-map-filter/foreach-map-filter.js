function doubleValues(arr){
    return arr.map(function(val){
        return val * 2;
    });
}

function onlyEvenValues(arr){
    return arr.filter(function(val){
        return val % 2 === 0;
    });
}

function showFirstAndLast(arr){
    return arr.map(function(val){
        return val[0] + val[val.length - 1];
    });
}

function addKeyAndValue(arr, key, value){
    return arr.map(function(val){
        val[key] = value;
        return val;
    });
}

function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else {
                obj[letter] = 1;
            }
        }
    });

    return obj;
}

function doubleValuesWithMap(arr){
    return arr.map(function(val){
        return val * 2;
    });
}

function valTimesIndex(arr){
    return arr.map(function(val, idx){
        return val * idx;
    });
}

function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];
    });
}

function extractFullName(arr){
    return arr.map(function(val){
        return val.first + " " + val.last;
    });
}

function filterByValue(arr, key){
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
}

function find(arr, searchValue){
    return arr.filter(function(val){
        return val === searchValue;
    })[0];
}

function findInObj(arr, key, searchValue){
    return arr.filter(function(val){
        return val[key] === searchValue;
    })[0];
}

function removeVowels(str){
    var vowels = "aeiou";
    return str.toLowerCase().split("").filter(function(val){
        return vowels.indexOf(val) === -1;
    }).join("");
}

function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(val){
        return val * 2;
    });
}
