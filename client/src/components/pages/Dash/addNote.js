import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_NOTE } from '../../../utils/mutations';
import Auth from '../../../utils/auth';


const AddNote = () => {
    const [note, setNote] = useState('');
    const [addNote, { error }] = useMutation(ADD_NOTE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await addNote({
                variables: { note }
            });
            setNote('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="addNote">
            <h2 className="addNoteHeader">Take some time to journal your thoughts on what you've learnt.</h2>
            {Auth.loggedIn() ? (
                <>
                    <form className="form" onSubmit={handleFormSubmit}>

                        <div class="col-8">
                            <input 
                                value={note}
                                className="note-textarea" 
                                placeholder="Note Text"
                                onChange={(event) => setNote(event.target.value)}
                                >
                            </input>
                        </div>
                        <div>
                            <button className="" type="submit">Save note.</button>
                        </div>
                        {error && (
                            <div className="">
                            {error.message}
                            </div>
                        )}
                    </form>
                </>
            ) : (
                <p>
                    You need to be logged in to add new notes.
                </p>
            )}
        </section>
    );
};

export default AddNote;