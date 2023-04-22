import React from 'react';
import Logo from './logo';
import Hamburger from '../hamburger/hamburger';

// className={` '' ${window.location.pathname === '/find-breed' ? 'header--blue' : ''}`}

export default function MainHeader() {
    return (
        <header>
            <Logo />
            <Hamburger />
        </header>
    )
}