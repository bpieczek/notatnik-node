import React, { useState } from "react";

function Note(props) {

    const [desc, setDesc] = useState(false);

    const toggleDesc = () => {
        setDesc(!desc);
    }

    const editHandler = () => {
        props.onEdit({
            title: props.title,
            content: props.content,
            _id: props.id
        })
    }

    return (
        <div className="note note-note">
            <p onClick={toggleDesc}>{props.title}</p>
            {desc && (
                <div className="description">
                    {props.content}
                </div>
            )}
            <div className="controls">
                <button
                    onClick={editHandler}
                >Edytuj</button>
                <button
                    className="delete"
                    onClick={() => props.onDelete(props.id)}
                >Usuń</button>
            </div>
        </div>
    );
}

export default Note;