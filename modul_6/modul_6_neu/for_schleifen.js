let myList = [12, "Banana", 1];

let fruits = ["Banana", "Orange", "Apple", "Mango"];


let singletestVar = "asd";

function containsElement(array, element) {
    return array.includes(element);
}

function initArrays() {
    let contentRef = document.getElementById('my_content');
    contentRef.innerHTML = "";
    for (let inedxFruits = 0; inedxFruits < fruits.length.length; inedxFruits++) {
        contentRef.innerHTML += `<p>+ ${fruits[inedxFruits]}</p>`;
    }
}

function sumArray(arr) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += arr[index];
        
    }
}
console.log(sumArray([3, 7, 1, 4])); 