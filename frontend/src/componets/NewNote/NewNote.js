import React, { useState } from "react";
import './NewNote.css';

function NewNote(props) {

    const [form, setForm] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const changeTitleHandler = (event) => {
        const value = event.target.value;
        setTitle(value);

    }

    const changeDescHandler = (event) => {
        const value = event.target.value;
        setDesc(value);
    }

    const addNote = () => {
        const note = {
            title: title,
            content: desc
        };

        props.onAdd(note);

        setTitle("");
        setDesc("");
        setForm(false)
    }

    return (
        form ? (
            <div className="note">
                <label>
                    <div>
                        Tytył:
                    </div>
                    <input type="text"
                        value={title}
                        onChange={changeTitleHandler}
                        placeholder=" "
                    />
                </label>

                <label>
                    <div>
                        Opis:
                    </div>
                    <input type="text"
                        value={desc}
                        onChange={changeDescHandler}
                        placeholder=" "
                    />
                </label>

                <button className="dodaj" onClick={() => addNote()}> Dodaj notatke</button>
            </div>
        ) : (
            <button className="new-note" onClick={() => setForm(true)}>Nowa Notatka</button>
        )
    );
}

export default NewNote;