import React, { useState } from 'react';


const addNote = () => {
    const [note, setNote] = useState('');
    return (
        <section className="addNote">
            <h2 className="addNoteHeader">Take some time to journal your thoughts on what you've learnt.</h2>
            <form>
                <div class="col-8">
                    <input class="note-title" placeholder="Note Title" maxlength="28" type="text"></input>
                    <textarea class="note-textarea" placeholder="Note Text"></textarea>
                    <button type="submit">Save note.</button>
                </div>
            </form>
        </section>
    )
}

export default addNote;