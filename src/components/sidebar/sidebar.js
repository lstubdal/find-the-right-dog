import React, { useEffect, useRef } from "react";
import CloseIcon from './closeIcon'
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from  '../hamburger/menuSlice';
import Link from 'next/link'; // create client-side navigation between pages without a full page reload. This component prefetches pages in the background to provide fast navigation.

export default function Menu() {

    // display and hide sidebar
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
                        {/* className={styles.sidebar__link}  */}
                        <Link key="find-breed" href="/findBreed" className="sidebar__link" >Find breed</Link>
                    </li>

                    <li>
                        <Link key="ready-for-a-dog" href="/readyForADog" className="sidebar__link">Am I ready for a dog?</Link>
                    </li>

                    <li>
                        <Link key="allBreeds" href="/allBreeds" className="sidebar__link">See all breeds</Link>
                    </li>

                    <li>
                        <Link key="helpPage" href="/helpPage" className="sidebar__link">What is this website?</Link>
                    </li>

                    <li>
                        <Link key="contact" href="/contact" className="sidebar__link">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}