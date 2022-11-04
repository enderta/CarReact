//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

function toCamelCase(str){
    let arr = str.split(/[-_]/);
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result += arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return result;
}