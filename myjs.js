// Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

function getName(obj) {
    return obj.name;
}

getName({ name: 'Luisa', age: 25 });

// Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
// totalLetters(['javascript', 'is', 'awesome']) should return 19
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24

function totalLetters(arr) {
    var total =0;
    function count(x) {
        total += x.length
    }
    arr.forEach(count);
    return total;
}

totalLetters(['what', 'happened', 'to', 'my', 'function'])