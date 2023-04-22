import React from "react";
import Sidebar from '../sidebar/sidebar'
import HamburgerIcon from "./hamburgerIcon";
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../hamburger/menuSlice';

export default function Hamburger() {
    const displayStatus = useSelector((state) => state.menu.value) // access variable in menuslice
    const dispatch = useDispatch() 
    console.log('---STATUS---HAMBURGER', displayStatus)
   
    return (
        // hide menu if hamburger not clicked
        <div className="hamburger">
            {displayStatus === false ? (
                <button onClick={() => dispatch(toggle())}>
                <HamburgerIcon />
            </button>
            ) : <Sidebar /> 
        }
        
        </div>
    )
}
