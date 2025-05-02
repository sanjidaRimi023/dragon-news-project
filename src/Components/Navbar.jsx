import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between my-8 items-center'>
            <div></div>
            <div className='flex gap-5 text-accent text-lg'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-5'>
                <img src={user} alt="user logo" />
                <button className='btn btn-primary rounded-none'>LogIn</button>
            </div>
        </div>
    );
};

export default Navbar;