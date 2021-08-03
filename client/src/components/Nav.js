import React from 'react';
import '../styles/nav.css'

function Nav({ currentPage, handlePageChange }) {
    return (
        <header className="navbar">
            <nav className="toolbar">
                <div className="left">
                    <div id="logo"
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} >
                        {<i class="fab fa-houzz"></i>}
                    </div> 
                    
                </div>
                               
                <div className="nav-items right">
                    <ul>
                        <li id="signup-nav" 
                            onClick={() => handlePageChange('Signup')}
                            className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}>
                            Signup
                        </li>
                        <li id="login-nav"
                            onClick={() => handlePageChange('Login')}
                            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
                            Login
                        </li>
                        <li id="dash-nav" 
                            onClick={() => handlePageChange('Dash')}
                            className={currentPage === 'Dash' ? 'nav-link active' : 'nav-link'}>
                            Dashboard
                        </li>
                    </ul>
                </div>
            </nav> 
        </header>
    )
}

export default Nav;
