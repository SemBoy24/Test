//notizen anzeigen lassen

    //brauche notizen
    let allNotes = {
        'notesTitles' : ['Obst', 'bester Held'],
        'notes' : ['banane', 'Spidey'],
        'archivNotsTitles' : [],
        'archivNotes' : [],
        'trashNotesTitle' : [],
        'trashNotes' : [],
    }

    //definieren wann anzeigen
    function renderNotes() {
        //definieren wo angezeigt
        let contentRef = document.getElementById('content');
        contentRef.innerHTML = "";

        for (let indexNote = 0; indexNote < allNotes.length; indexNote++) {
            contentRef.innerHTML += getNoteTmplate(indexNote);
            
        }
    }

    //notizen archiviere
    function renderArchivNotes() {
        let archivContentRef = document.getElementById('archiv_content');
        archivContentRef.innerHTML = "";

        for (let indexArchivNote = 0; indexArchivNote < allNotes.length; indexArchivNote++) {
            archivContentRef.innerHTML += getArchivNoteTemplate[indexArchivNote];
            
        }
    }

    function renderArchivNotesTitles() {

    }

    function getArchivNoteTemplate(indexArchivNote) {
        return`
        <div class="note">
            <h3>+ ${allNotes.archivNotesTitles[indexArchivNote]}</h3>
            <p>${allNotes.archivNotes[indexArchivNote]}</p>
            <div>
                <button onclick="moveNote(${indexArchivNote}, 'archivNotes', 'trashNotes')" class="btn">X</button>
                <button onclick="moveNote(${indexArchivNote}, 'archivNotes', 'notes')" class="btn">N</button>
            </div>
        </div>`
    }

    //notizen löschen
    function getNoteTmplate(indexNote) {
        return `
        <div class="note">
            <h3>+ ${allNotes.notesTitles[indexNote]}</h3>
            <p>${allNotes.notes[indexNote]}</p>
            <div>
                <button onclick="moveNote(${indexNote}, 'notes', 'trashNotes')" class="btn">X</button>
                <button onclick="moveNote(${indexNote}, 'notes', 'archivNotes')" class="btn">A</button>
            </div>
        </div>`;
    }

    //notizen löschen
    function renderTrashNotes() {
    
        let trashContentRef = document.getElementById('trash_content');
        trashContentRef.innerHTML = "";

        for (let indexTrashNote = 0; indexTrashNote < allNotes.length; indexTrashNote++) {
            trashContentRef.innerHTML += getTrashNoteTmplate(indexTrashNote);
        
        }
    }

    function getTrashNoteTmplate(indexTrashNote) {
        return`
        <div class="note">
            <h3>+ ${allNotes.trashNotesTitles[indexTrashNote]}</h3>
            <p>${allNotes.trashNotes[indexTrashNote]}</p>
            <div>
                <button onclick="deleteNote(${indexTrashNote})" class="btn">X</button>
                <button onclick="moveNote(${indexTrashNote}, 'trashNotes', 'notes')" class="btn">N</button>
            </div>
        </div>`    
    }

//notizen hinzufügen 

    //eingabe vom user
    function addNote() {
        let noteInputRef = document.getElementById('note_input');
        //eingabe auslesen
        let noteInput = noteInputRef.value;
        //eingabe den notizen hinzufügen
        notes.push(noteInput);

        renderNotes();
        //eingabe anzeigen lassen(+input text löschen)
        noteInputRef.value = "";
    }

//notizen verschieben

    moveNote(1, 'trashNotes', 'notes')

    function moveNote(indexNote, startKey, destinationKey) {
        let note = allNotes[startKey].splice(indexNote, 1);
        allNotesotes[destinationKey].push(note[0]);
        
        let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
        allNotes[destinationKey + "Titles"].push(notesTitle[0]);

        renderNotes();
        renderArchivNotes();
        renderTrashNotes();
    }

    function deleteNote(indexTrashNote) {
        allNotes.trashNotes.splice(indexTrashNote, 1);
        allNotes.trashNotesTitles.splice(indexTrashNote, 1);

        renderNotes();
        renderArchivNotes();
        renderTrashNotes();
    }