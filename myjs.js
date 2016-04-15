// Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

function getName (obj) {
    return obj.name;
}

getName({ name: 'Luisa', age: 25 });

// Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
// totalLetters(['javascript', 'is', 'awesome']) should return 19
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24

function totalLetters (arr) {
    var total = 0;
    function count (x) {
        total += x.length
    }
    arr.forEach(count);
    return total;
}

totalLetters(['what', 'happened', 'to', 'my', 'function'])

// Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
// keyValue('city', 'Denver') should return Object {city: "Denver"}

function keyValue (key, value) {
    var newObj = {};
    newObj[key] = value;
    return newObj;
}

keyValue('city', 'Denver')

// Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'

function negativeIndex (arr, num) {
    return arr[(arr.length + num)];
}
negativeIndex(['a', 'b', 'c', 'd', 'e'], -2);
negativeIndex(['jerry', 'sarah', 'sally'], -1);

// Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'

function removeM (str) {
    return str.replace('m','')
}

removeM('family');

// Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
// printObject({ a: 10, b: 20, c: 30 }) should print:
// a is 10
// b is 20
// c is 30
// 
// printObject({ firstName: 'pork', lastName: 'chops' }) should print: 
// firstName is pork 
// lastName is chops

function printObject(obj) {
    var keys = Object.keys(obj);
    for (var i=0; i<keys.length; i++) {
    console.log(keys[i] + ' is ' + obj[keys[i]])
    }
}
printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });
