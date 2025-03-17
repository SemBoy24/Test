document.getElementById('test_div').innerHTML = '<button id="test_button"><p>test</p></button>';

document.getElementById('test_div').classList.remove('green_bg'); //entfernt css
document.getElementById('test_div').classList.add('green_bg'); //fügt css hinzu
document.getElementById('test_div').classList.toggle('green_bg'); //fügt hinzu wenn nicht vorhanden und entfernt wenn vorhanden

document.getElementById('test_input').setAttribute('type', "text");
document.getElementById('test_input').setAttribute('value', 123);

console.log(document.getElementById('test_input').value);



function toggleDNone(id){

    document.getElementById(id).classList.toggle('d_none');
};

function logger(){
    console.log(55555);
};