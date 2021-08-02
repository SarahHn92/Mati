import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dash from './pages/Dash';

function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    function handlePageChange (page) {
        setCurrentPage(page);
    }
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Login') {
            return <Login />;
        }
        if (currentPage === 'Signup') {
            return <Signup />;
        }
        if (currentPage === 'Dash') {
            return <Dash />;
        }
    }
    return (
        <main>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* {renderPage()}
            <Footer /> */}
        </main>
    );
}

export default PageContainer;