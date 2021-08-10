import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import DashHeader from './DashHeader';
import DashNotes from './DashNotes';
import { QUERY_USER, QUERY_ME } from '../../../utils/queries';
import '../../../styles/dash.css';


const Dash = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: {username: userParam },
    });
    const user = data?.me || data?.user || {};

    console.log(user);

    return (
        <section className="dashSection">
            <div className="header">
               <DashHeader />
               <div>
                   {loading ? (
                        <p>Loading...</p>
                   ) : (
                        <h4>Welcome {userParam ? `${user.username}` : 'friend'}.</h4> 
                   )}
                   
               </div>
            </div>
            <div className="notesContainer">
                    <DashNotes 
                        notes={user.notes} 
                    />
            </div>
            
        </section>
    )
}

export default Dash;