const fs = require('fs');

/**
 * add --title=NoteTitle --body="Note body"
 */
var addNote = (title, body) => {
    console.log("Adding Note");

    var notes = [];
    var note = {
        title,
        body
    };

    try {
        fs.readFile('notes-data.json', (err, data) => {
            if (err)
                throw err;

            notes = JSON.parse(data);
        });
    } catch (e) {
      notes = [];
    }

    notes.push(note);
    fs.writeFile('notes-data.json', JSON.stringify(notes), (err) => {
        if (err)
            throw err;
        console.log('Note added!');
    });
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
