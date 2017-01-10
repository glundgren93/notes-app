const fs = require('fs');

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
}

var checkDuplicateTitle = (arr, title) => {
    return arr.filter((note) => note.title === title);
}

var writeNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

/**
 * add --title=NoteTitle --body="Note body"
 */
var addNote = (title, body) => {
    console.log("Trying to add Note");
    var note = {
        title,
        body
    };
    var notes = fetchNotes();
    var duplicateNotes = checkDuplicateTitle(notes, title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        writeNote(notes);
        return note;
    }
};

/**
 * list
 * @return {[type]} [description]
 */
var getAll = () => {
    console.log('getting all notes');
}

var getNote = (title) => {
    console.log('note found', title);
}

var deleteNote = (title) => {
    console.log('deleted', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote
}
