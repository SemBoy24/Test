let myImgs = [
    //in cmd den Ordner rein schieben dann "DIR /b" schreiben
    //damit alle links von diesem Ordner aufgelistet werden
    ]


let randomTitles = [
"Sem ist cool",
"Selin ist schwul",
"Spiderman ist der einzig Wahre"
];

let randomTitlesSecond = [
    "Sem ist Spiderman",
    "Selin ist Meg von Family Guy",
    "Spiderman ist Sem"
];

let randomDescriptions = [
"weil er der beste ist",
"weil sie stinkt",
"weil er der coolste ist"
];

let randomDescriptionsSecond = [
    "denn beides fängt mit S an",
    "weil ich ihr gern ins Gesicht furze... YEAHH",
    "hab ich oben erklärt du Hund"
];

function render(arrTitles, arrDescriptios) {
    let contentRef = document.getElementById('my_content');
    contentRef.innerHTML = "";
    for (let i = 0; i < randomTitles.length; i++) {
        contentRef.innerHTML += getNoteTmplate(i, arrTitles, arrDescriptios);

    }
};

function getNoteTmplate(i, arrTitles, arrDescriptios) {
    return `   <div onclick="toggleOverlay(${i})" class="single_element">
                                        <h2>
                                            ${arrTitles[i]}
                                        </h2>
                                        <p>
                                        ${arrDescriptios[i]}
                                        </p>
                                    </div>`
};

function renderFiltered(i) {
    if(i == 1){
        render(randomTitles, randomDescriptions)
    }
    if (i == 2) {
        render(randomTitlesSecond, randomDescriptionsSecond)
    }
}

function toggleOverlay(){
    let overlayRef = document.getElementById('overlay')

    overlayRef.classList.toggle('d_none')
}