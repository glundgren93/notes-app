const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Starting app');

switch (command) {
    case "add":
        var note = notes.addNote(argv.title, argv.body);
        if(note)
          console.log("The following note was added:", note.title, note.body);
        else
          console.log("Cannot add note with duplicate title");
        break;
    case "list":
        notes.getAll();
        break;
    case "read":
        notes.getNote(argv.title);
        break;
    case "remove":
        notes.deleteNote(argv.title);
        break;

    default:
        console.log('pajepgje');
}
