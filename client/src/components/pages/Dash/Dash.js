import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import DashHeader from './DashHeader';
// import DashAffirm from './DashAffirm';
import DashNotes from './DashNotes';
import { QUERY_NOTES } from '../../../utils/queries';


const Dash = () => {
    const { loading, data } = useQuery(QUERY_NOTES);
    const notes = data?.thoughts || [];

    return (
        <section>
            <div>
               <DashHeader />
            </div>
            <div>
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