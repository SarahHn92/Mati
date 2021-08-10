import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
import Auth from '../utils/auth';


function Nav() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <header className="navbar">
            <nav className="toolbar">
                <div className="left">
                    <Link id="logo" className="homeLogo" to="/">
                        {<i className="fab fa-houzz"></i>}
                    </Link>
                </div>
                               
                <div className="nav-items-right">
                    {Auth.loggedIn() ? (
                        <>
                            <Link id="dash-nav" className="dash navLink" to="/dash">
                                Dashboard
                            </Link>
                            <button className="logoutBtn" onClick={logout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link id="signup-nav" className="signup navLink" to="/signup">
                                Sign Up
                            </Link>
                            <Link id="login-nav" className="login navLink" to="/login">
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </nav> 
        </header>
    )
}

export default Nav;
