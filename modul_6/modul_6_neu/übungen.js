// Aufgabe 1

    fullName("sem", "boy")

    function fullName(firstName, lastName) {
        console.log (firstName + lastName);
        return fullName;
        }
// 


// Aufgabe 2

    let mySecondString = "alles groß"
    mySecondString = mySecondString.toUpperCase();

    console.log(mySecondString);
// 


// Aufgabe 3 

    let myTestString = "ich werde softwareentwickler"
    console.log(myTestString.length); 
// 


// Aufgabe 4 

    let formatToCurrency = new Intl.NumberFormat('en-Us', {
        currency: 'USD',
        style: 'currency',
    });

    console.log(formatToCurrency.format(0.50));
// 
// zweite Lösung für Aufgabe 4 nicht fertig

    // let secondFormatToCurrency = "0,50111€"
    // console.log(secondFormatToCurrency.toFixed(2));
// 



// Aufgaben Section ||


// Augabe 1 Video 3

    document.getElementById('test_div').innerHTML = '<button id="test_button"><p></p></button>';
// 


// Aufgabe 2 Video 6

    document.getElementById('sem_p').setAttribute('title', 'was geht');
// 


// Aufgabe 3

    document.getElementById('sem_p').setAttribute('class', 'green_bg'); // -> antwort ja
// 


// Aufgabe 4

    // unterschied = classList.add können mehrere klassen hinzugefügt werden
// 


// Aufgabe  1 Video 9

console.log(document.getElementById('sems_input').value);