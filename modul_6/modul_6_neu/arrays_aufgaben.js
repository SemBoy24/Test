let myList = [12, "Banana", 1];

let fruits = ["Banana", "Orange", "Apple", "Mango"];

let array = fruits


// Aufgabe 1
// function containsElement(array, element){
//     return array.includes(element, 0); 
// }


// Aufgabe 2
// function findElementIndex(array, element){
//     return array.indexOf(element);
// }

// console.log(findElementIndex(array, "Banana"));



// Aufgabe 3
// function removeFirstElement(array) {
//     return array.shift(array);
// }

// console.log(removeFirstElement(array));



// Aufgabe 4
function addElementToStart(array, element) {
    // Erstelle eine Kopie des Arrays, um das ursprüngliche Array nicht zu verändern
    let newArray = [...array];
    // Füge das Element am Anfang des neuen Arrays hinzu
    newArray.unshift(element);
    return newArray;
}

// Test
console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]



// Aufgabe 5
function getSubArray(array, start, end) {
    // slice erstellt ein neues Array von Index 'start' bis 'end' (end nicht eingeschlossen)
    return array.slice(start, end);
}

// Test
console.log(getSubArray([10, 20, 30, 40, 50], 10, 40)); // [20, 30, 40]



// Aufgabe 6
function joinArray(array, separator) {
    // join verbindet die Array-Elemente zu einer Zeichenkette, getrennt durch den Separator
    return array.join(separator);
}

// Test
console.log(joinArray([10, 20, 30, 40], "-")); // "10-20-30-40"
console.log(joinArray(["apple", "banana", "cherry"], ", ")); // "apple, banana, cherry"
