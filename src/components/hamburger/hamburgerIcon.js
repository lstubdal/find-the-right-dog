import React from 'react';

// className={` '' ${window.location.pathname === '/all-breeds' ? 'hamburger--gold' : ''}`}

export default function Hamburgericon() {
    return (
        <div>
            <svg width="75" height="75" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M12.5 25H87.5V33.3333H12.5V25ZM28.5 45.8333H87.5V54.1667H28.5V45.8333ZM46 66.6667H87.5V75H46V66.6667Z" fill="#373737"/>
            </svg>
            <title>Hamburger</title>
        </div>
    );
}
