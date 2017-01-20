const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
const notes = require("./src/notes.js");

const titleOptions = { describe: "Note Title", demand: true, alias: "t" };
const bodyOptions = { describe: "Note body", demand: true, alias: "b" };

const argv = yargs
  .command("add", "Add a new note", { title: titleOptions, body: bodyOptions })
  .command("list", "List all notes")
  .command("read", "Read a note", { title: titleOptions })
  .command("remove", "Remove a note", { title: titleOptions })
  .help().argv;

const command = argv._[0];

switch (command) {
  case "add":
    var note = notes.addNote(argv.title, argv.body);
    if (note)
      notes.logNote(note);
    else
      console.log("Cannot add note with duplicate title");
    break;
  case "list":
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => {
      notes.logNote(note);
    });
    break;
  case "read":
    var note = notes.getNote(argv.title);

    if (note) {
      notes.logNote(note);
    } else {
      console.log("Note not found");
    }

    break;
  case "remove":
    notes.deleteNote(argv.title);
    break;

  default:
    console.log("Command not found");
}
