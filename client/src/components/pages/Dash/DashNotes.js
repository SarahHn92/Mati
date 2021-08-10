import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_NOTES } from '../../../utils/queries';
import AddNote from './addNote';

const DashNotes = ()  => {
    const { loading, data } = useQuery(QUERY_NOTES);
    const notes = data?.notes || [];
    

    return (
        <section className="dashnotes">
            <div className="addNoteLink">
                <AddNote  />
            </div>

            {loading ? (
                <p>Notes are loading...</p>
            ) : (
                <div>
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
                </div>
            )}
        </section>
    )
}

export default DashNotes;