import React from 'react';
import DashHeader from './DashHeader';
// import DashAffirm from './DashAffirm';
import DashNotes from './DashNotes';


function Dash() {
    return (
        <section>
            <div>
               <DashHeader />
                {/* <DashAffirm/> */}
                <DashNotes /> 
            </div>
            <div>

            </div>
            
        </section>
    )
}

export default Dash;