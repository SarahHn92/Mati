import React from 'react';

const DashNotes = ({
    notes
}) => {
    if (!notes.length) {
        return <h2> You haven't written any notes yet. Click the clipboard to get started! </h2>
    }

    return (
        <section>
            {notes &&
                    notes.map((note) => (
                        <div>
                            <h4 className="noteTitle">{note.date_created}</h4>
                            <div className="noteText">
                                <p>
                                    {note.noteBody}
                                </p>
                            </div>  
                        </div>
                    ))}
        </section>

    )
}

export default DashNotes;