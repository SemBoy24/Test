function addNote() {
    var noteInput = document.getElementById('noteInput');
    var noteList = document.getElementById('noteList');

    if (noteInput.value.trim() !== '') {
        var newNote = document.createElement('li');
        newNote.textContent = noteInput.value;
        noteList.appendChild(newNote);
        noteInput.value = '';
    }
}