const express = require("express");
const router = express.Router();

const noteControllers = require("../controllers/api/noteController")

// pobranie wszyskich notatek
router.get('/notes', noteControllers.getAllNotes);
// pobranie notatki 1
router.get('/notes/:id', noteControllers.getOneNote);
// zapisywanie
router.post('/notes', noteControllers.saveNote);
// edytowanie
router.put('/notes/:id', noteControllers.updateNote);
// usuwanie
router.delete('/notes/:id', noteControllers.deleteNote);

module.exports = router;