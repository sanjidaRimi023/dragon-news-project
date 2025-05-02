import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';
const Header = () => {

    return (
        <div className='flex justify-center gap-4 items-center flex-col my-3'>
            <img className='w-[550px]' src={logo} alt="the dragon news logo" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            
            <p className='text-accent font-semibold'>{format(new Date(), "eeee, MMMM dd , yyyy")}</p>
        </div>
    );
};

export default Header;