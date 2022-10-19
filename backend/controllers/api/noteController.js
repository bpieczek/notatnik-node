const Note = require('../../DB/models/note');

class NoteController{
    async getAllNotes(req, res) {
        let doc;

        try{
            doc = await (await Note.find({}));
        }catch(err){
            return res.status(500).json({ msg: err.msg})
        }

        res.status(200).json(doc);
    }

    async getOneNote(req, res) {
        const id = req.params.id;
        let doc;

        try{
            doc = await Note.findOne({_id: id});
        }catch(err){
            return res.status(500).json({ message: err.message})
        }

        res.status(200).json(doc);
    }

    async saveNote(req, res) {

        const title = req.body.title;
        const content = req.body.content;
        
        let note;

        try{
        note = new Note({title, content})
        await note.save();
        }catch(err){
            return res.status(422).json({ message: err.message})
        }
        

        res.status(201).json(note);
    }

    async updateNote(req, res) {
        const id = req.params.id;
        const title = req.body.title;
        const content = req.body.content;
        let doc;

        try{
            doc = await Note.findOne({_id: id});
        }catch(err){
            return res.status(500).json({ message: err.message})
        }

        doc.title = title;
        doc.content = content;
        await doc.save();
        
        res.status(201).json(doc);
    }

    async deleteNote(req, res) {
        const id = req.params.id;

        let doc;
        try{
            doc = await Note.deleteOne({_id: id});
        }catch(err){
            return res.status(500).json({ message: err.message})
        }

        res.sendStatus(204);
    }
}

module.exports = new NoteController();