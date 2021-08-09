import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import DashHeader from './DashHeader';
// import DashAffirm from './DashAffirm';
import DashNotes from './DashNotes';
import { QUERY_NOTES } from '../../../utils/queries';
import '../../../styles/dash.css';


const Dash = () => {
    const { loading, data } = useQuery(QUERY_NOTES);
    const notes = data?.thoughts || [];
    console.log(notes);
    return (
        <section className="dashSection">
            <div className="header">
               <DashHeader />
            </div>
            <div className="addNoteLink">
                <Link id="notepad" className="notepad" to="/addNote">
                    {<i className="fas fa-clipboard"></i>}
                </Link>
            </div>
            <div className="notesContainer">
                {loading ? (
                    <div> Notes are loading...</div>
                ) : (
                    <DashNotes 
                        notes={notes} 
                    />
                )}
                
            </div>
            
        </section>
    )
}

export default Dash;