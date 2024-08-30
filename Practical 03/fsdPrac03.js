
// Creating an array with mixed types
let mixedArray = [
    42,                 // Integer
    "Hello, World!",    // String
    true,               // Boolean
    [1, 2, 3],          // Array
    "JavaScript"        // String
];

console.log("Original Array:", mixedArray);

// Length
console.log("Length of array:", mixedArray.length);
console.log("Length of string:", mixedArray[1].length);

// Slice
console.log("Slice of array (index 1 to 3):", mixedArray.slice(1, 3));
console.log("Slice of string (index 0 to 5):", mixedArray[1].slice(0, 5));

// Substring
let str = mixedArray[1];
console.log("Substring of string (index 0 to 5):", str.substring(0, 5));

// Replace
let newStr = mixedArray[1].replace("World", "JavaScript");
console.log("String after replace:", newStr);

// Concat
let newArray = mixedArray.concat([false, "New Element"]);
console.log("Array after concat:", newArray);

let newString = mixedArray[1].concat(" How are you?");
console.log("String after concat:", newString);

// PadStart
let paddedString = mixedArray[4].padStart(15, '*');
console.log("String after padStart:", paddedString);

// PadEnd
let paddedEndString = mixedArray[4].padEnd(15, '-');
console.log("String after padEnd:", paddedEndString);
