import React from 'react';
import Photo from'../../../Assets/babycrop.png';
import '../../../styles/header.css'


function Header() {
    return (
        <header className="header">
            <div>
                <img className="headerImg" src={Photo} alt="newborn hand"></img>
            </div>
            <div className="title">
                <h1 className="t1">Mati</h1> 
            </div>  
        </header>
    )
}

export default Header;