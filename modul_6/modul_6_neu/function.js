// let discount = 50;
// let price = 500;

// console.log((price - discount) * 1.19);

// price = 400;;



// function calculatePrice() {
//     console.log((price - discount) * 1.19);
// }



// Parameter    

logCalculatedPrice(50, 500, 1.19);
logCalculatedPrice(50, 300, 1.19);

function logCalculatedPrice(discount, price, tax) {
    console.log((price - discount) * tax);
}


// Return

logCalculatedPrice((50, 300));

function logCalculatedPrice(discount, price) {
    let value = (price -discount) * 1.19;

    console.log("vor return");
    return value;
    console.log("nach return"); // nach return ist immer ende
}
