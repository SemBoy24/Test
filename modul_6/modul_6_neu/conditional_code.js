// Booleans

let myCondition = true;

myCondition = !true; // ! = macht alles umgekehrt, false wird zu true und true zu false -> not Operator
myCondition = false || true || false; //  sobald einer true ist sind alle true -> or Operator
myCondition = false && false; // es muss beides true sein damit es true wird


// Numbers

myCondition = 45 == "45"; // testet ob es exakt gleich ist, testet aber nicht nach typ ->true
myCondition = 45 === "45"; // testet ob es exakt gleich mit typ ->false
myCondition = 45 > 123; // ergibt false weil 123 gröser -> größen abfrage
myCondition = 45 > 45; // false
myCondition = 45 >= 45; // true durch das = zeichen -> größer-gleich abfrage
myCondition = 45 !== "45"; // ! zeichen macht es umgekehrt ->false
myCondition = 45 !== 47; // ! zeichen macht es umgekehrt ->true


// if else

myIfCondition = false;

if(myIfCondition){
    console.log("if teil");
} else if(!myIfCondition) {
    console.log("if-else teil");
} else {
    console.log("else teil");
}