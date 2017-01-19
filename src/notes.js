const fs = require("fs");

const fetchNotes = () => {
  try {
    var noteString = fs.readFileSync("notes-data.json");
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

const filterNoteTitle = (arr, title) => {
  return arr.filter(note => note.title.toUpperCase() === title.toUpperCase());
};

const writeNote = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

/**
 * add --title=NoteTitle --body="Note body"
 */
const addNote = (title, body) => {
  console.log("Trying to add Note");
  var note = { title, body };
  var notes = fetchNotes();
  const duplicateNotes = filterNoteTitle(notes, title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    writeNote(notes);
    return note;
  }
};

/**
 * list
 */
const getAll = () => {
  return fetchNotes();
};

const getNote = title => {
  const notes = fetchNotes();
  const filteredNote = filterNoteTitle(notes, title);
  return filteredNote[0];
};

/**
 * delete --title=NoteTitle
 */
const deleteNote = title => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter(
    note => note.title.toUpperCase() !== title.toUpperCase()
  );
  writeNote(filteredNotes);

  return notes.length !== filteredNotes.length;
};

/**
 * Clear Note files
 */
const clearNotes = () => {
  writeNote([]);
};

const logNote = note => {
  console.log("---");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = { addNote, getAll, getNote, deleteNote, clearNotes, logNote };
