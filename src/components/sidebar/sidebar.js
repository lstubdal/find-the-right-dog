import React, { useEffect, useRef } from "react";
import CloseIcon from './closeIcon'
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from  '../hamburger/menuSlice';

export default function Menu() {
    const displayStatus = useSelector((state) => state.menu.value) 
    const dispatch = useDispatch() 

    // source inspiration: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
    // useref to avoid rerendering each time user clicks
    const ref = useRef(displayStatus); 

    const handleClickOutside = (event) => {
        // if togglevalue is true
        if (ref.current) { 
            
            // and user clicked outside of menu
            if (event.target.className !== 'sidebar' && event.target.className !== 'sidebar__link') {

                // hide menu again
                dispatch(toggle())
            }
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return (
        <div className="sidebar">
            <CloseIcon className="sidebar__close" />
            <nav>
                <ul>
                    <li> 
                        <div  className="sidebar__link">Find breed</div>
                    </li>

                    <li>
                        <div className="sidebar__link">Am I ready for a dog?</div>
                    </li>

                    <li>
                        <div className="sidebar__link">See all breeds</div>
                    </li>

                    <li>
                        <div className="sidebar__link">What is this website?</div>
                    </li>

                    <li>
                        <div className="sidebar__link">Contact</div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}