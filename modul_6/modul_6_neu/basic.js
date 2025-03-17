// Variablen

let meineVariable  = 27;

function Beispiel (meineVariable)//=27



// Datentypen = abfragen von Daten

String = texte (auch URL ist texte);
Number = zahlen (js nimmt float auch als number);
Float  = eine kommazahl;
Int    = steht für Integer, ist eine Ganzzahl, schneidet nachkommazahlen weg;
Boolean= ist immer true oder false;
Array  = eine liste von dingen in eckigen klammern; // [2,5,'info']
Object = eine liste von dingen in geschweiften klammern genauer gesagt key/value paaren; // {age: 32, heiight: 177}



// JS Rechnungen

Division = 10/5;
Multy    = 10 * 5;
Pow      = 2**7; // power bedeutet hoch zahlen 3 hoch 3 = 27
Strings  = "hello" + "world"; //wenn strings addiert werden dann stehen sie nebeneinander, können nicht multipliziert oder geteilt werden



// Combination Strings and Numbers

let Combination = 5.0 - "4,2" -> NaN //= Not a Number, wegen Komma und nicht punkt
let Combination = 5.0 - "4.2" -> 0.8



// Trim and Length

let myTestString = "hello  "

myTestString = myTestString.trim(); // trim macht leerzeichen am anfang und am ende weg
console.log(myTestString.length); // zählt zeichen vom string unter anderem leerzeichen