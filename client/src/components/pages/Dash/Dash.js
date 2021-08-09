import React from 'react';
import { Link } from 'react-router-dom';
import DashHeader from './DashHeader';
// import DashAffirm from './DashAffirm';
// import DashNotes from './DashNotes';


function Dash() {
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
            {/* <div>
                <DashNotes />
            </div> */}
            
        </section>
    )
}

export default Dash;