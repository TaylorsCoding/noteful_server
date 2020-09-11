const express = require("express");
const FoldersService = require("./folders-service");

const foldersRouter = express.Router();
const jsonParser = express.json();

foldersRouter
  .route("/")
  .get((req, res, next) => {
    FoldersService.getAllFolders(req.app.get("db"))
      .then((folders) => {
        res.json(folders);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { title } = req.body;
    const newFolder = { title };
    FoldersService.insertFolder(req.app.get("db"), newFolder)
      .then((folder) => {
        res.status(201).location(`folders/${folder.id}`).json(folder);
      })
      .catch(next);
  });

module.exports = foldersRouter;
