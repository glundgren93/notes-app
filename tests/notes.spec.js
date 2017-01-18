const notes = require("../src/notes");

/**
 * Clear Note files before each test
 */
beforeEach(() => {
  notes.clearNotes();
});

describe("note", () => {
  it("should add a note", () => {
    expect(notes.addNote("NoteTitle", "NoteBody")).toBeTruthy();
  });

  it("should delete an added note", () => {
    notes.addNote("NoteTitle", "NoteBody");
    expect(notes.deleteNote("NoteTitle")).toBeTruthy();
  });

  it("should read an added note", () => {
    notes.addNote("NoteTitle", "NoteBody");
    expect(notes.getNote("NoteBody")).not.toBeNull();
  });
});
