const express = require("express");
const NotesService = require("./notes-service");

const notesRouter = express.Router();
const jsonParser = express.json();

notesRouter
  .route("/")
  .get((req, res, next) => {
    NotesService.getAllNotes(req.app.get("db"))
      .then((notes) => {
        res.json(notes);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { title, content, foler_id } = req.body;
    const newNote = { title, content, foler_id };
    NotesService.insertNote(req.app.get("db"), newNote)
      .then((note) => {
        res.status(201).location(`notes/${note.id}`).json(note);
      })
      .catch(next);
  });

notesRouter
  .route("/:note_id")
  .get()
  .delete((req, res, next) => {
    NotesService.deleteNote(req.app.get("db"), req.params.note_id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = notesRouter;
