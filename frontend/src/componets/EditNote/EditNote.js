import React, { useState } from "react";
import "./EditNote.css";

function EditNote(props) {

    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.content);

    const changeTitleHandler = (event) => {
        const value = event.target.value;
        setTitle(value);

    }

    const changeDescHandler = (event) => {
        const value = event.target.value;
        setDesc(value);
    }

    const editNote = () => {
        const note = {
            title: title,
            content: desc,
            _id: props.id
        }
        props.onEdit(note);

    }

    return (

        <div className="edit">
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

            <button onClick={() => editNote()}> Zapisz notatke</button>
        </div>
    );
}

export default EditNote;