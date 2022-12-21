import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import resume from '../assets/Resume of Engr Md Ferdous Alam.pdf'
const Header = () => {
    const contact = useRef()
    const handleClick = () => {
        contact.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl">Engr. Md Ferdous Alam</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='about'>About</Link>
                    </li>
                    <li>
                        <Link to='projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='service'>Service</Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleClick}
                        >Contact Me</Link>
                    </li>
                    <li>
                        <Link
                            to={resume}
                            target='_blank'
                            download
                        >Download Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Header;