import React from 'react';
import {NavLink} from 'react-router-dom';

const Header =() => {
    return (
        <header>
            <h1> Book Management App</h1>
            <hr />
            <div className='links'>
                <NavLink to="/" className="link" activeClassName="active" exact > Book List 
                </NavLink>
                <NavLink to="/add" className="link" activeClassName="active"> Add book
                    </NavLink>
                </div>
            </header>

    );

};
export default Header;


