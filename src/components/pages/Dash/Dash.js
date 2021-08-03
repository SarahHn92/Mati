import React from 'react';
import DashHeader from './DashHeader';
import DashAffirm from './DashAffirm';
import DashNotes from './DashNotes';


function Dash() {
    return (
        <section>
            <DashHeader />
            <DashAffirm/>
            <DashNotes />
        </section>
    )
}

export default Dash;