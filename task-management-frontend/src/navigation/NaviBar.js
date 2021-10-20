//
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './NaviBar.css';

function NaviBar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click); // Avautuessa ikonin ulkoasu muuttuu
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className = 'navibar'>
            <div className ='navibar-container'>
                <li to='/' className='navibar-logo' onClick={closeMobileMenu}>
                    TASK MANAGEMENT
                </li>  
            </div>
        </nav>
        </>
    );
}

export default NaviBar
