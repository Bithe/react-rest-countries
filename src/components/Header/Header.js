import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='menu'>
            <h2>Welcome to my React Site</h2>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    ); 
};

export default Header;