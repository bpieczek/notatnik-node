import React from "react";
import "./Notes.css"
import Note from "./Note";
import NewNote from "../NewNote/NewNote";
import Modal from 'react-modal';
import EditNote from "../EditNote/EditNote";
import axios from "../../axios";

class Notes extends React.Component {
    constructor(props) {
        super(props);
        ///

        this.state = {
            notes: [],
            showEditModal: false,
            editNote: {}
        };

    }

    componentDidMount() {
        this.fetchNotes();
    }

    async fetchNotes() {
        const res = await axios.get('/notes')
        const notes = res.data;

        this.setState({ notes })
    }

    async deleteNote(id) {
        const notes = [...this.state.notes]
            .filter(note => note._id !== id);

        await axios.delete('/notes/' + id)

        this.setState({ notes });
    }

    async addNote(note) {
        const notes = [...this.state.notes];

        //Add back
        const res = await axios.post('/notes', note)
        const newNote = res.data;

        //Add Front
        notes.push(newNote);
        this.setState({ notes });
    }

    async editNote(note) {
        await axios.put('/notes/' + note._id, note)


        const notes = [...this.state.notes]
        const index = notes.findIndex(x => x._id === note._id)

        if (index >= 0) {
            notes[index] = note;
            this.setState({ notes });
        }
        this.toggleModal();

    }

    toggleModal() {
        this.setState({ showEditModal: !this.state.showEditModal });
    }

    editNoteHandler(note) {
        this.toggleModal();
        this.setState({ editNote: note })
    }

    render() {

        return (
            <div>
                <h1>
                    Moje notatki:
                </h1>

                <NewNote
                    onAdd={(note) => this.addNote(note)}
                />

                <Modal
                    isOpen={this.state.showEditModal}
                    contentLabel="Edytuj notatkę"
                    className={"modal note"}>

                    <EditNote

                        title={this.state.editNote.title}
                        content={this.state.editNote.content}
                        id={this.state.editNote._id}
                        onEdit={note => this.editNote(note)}

                    />
                    <button onClick={() => this.toggleModal()}>Anuluj edycje</button>
                </Modal>

                {this.state.notes.map(note => (
                    <Note
                        key={note._id}
                        title={note.title}
                        content={note.content}
                        id={note._id}
                        onEdit={(note) => this.editNoteHandler(note)}
                        onDelete={(id) => this.deleteNote(id)}
                    />
                ))}
            </div>
        )
    }
}

export default Notes;