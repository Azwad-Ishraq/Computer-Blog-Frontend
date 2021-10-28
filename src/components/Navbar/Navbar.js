import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <h1>Blogs</h1>
           <div className="links">
           <NavLink className='link' to='/addBlog'>Post Blog</NavLink>
            <NavLink className='link' to='/blogs'> Blogs</NavLink>
            <NavLink className='link' to='/login'> Login</NavLink>
           </div>
        </nav>
    );
};

export default Navbar;