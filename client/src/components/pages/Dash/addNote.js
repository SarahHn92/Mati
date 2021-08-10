import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_NOTE } from '../../../utils/mutations';
import Auth from '../../../utils/auth';
import '../../../styles/dash.css';


const AddNote = () => {
    const [note, setNote] = useState('');
    const [addNote, { error }] = useMutation(ADD_NOTE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(note);
        try {
            const data = await addNote({
                variables: { noteBody: note }
            });
            console.log(data);
            setNote('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'note') {
          setNote(value);
        }
      };
    

    return (
        <section className="addNote">
            <h2 className="addNoteHeader">Take some time to journal your thoughts on what you've learnt.</h2>
            {Auth.loggedIn() ? (
                <>
                    <form className="form" onSubmit={handleFormSubmit}>

                        <div className="col-8">
                            <input 
                                name="note"
                                value={note}
                                className="note-textarea" 
                                onChange={handleChange}
                                >
                            </input>
                            <div>
                                <button className="submit" type="submit">Save note.</button>
                            </div>
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