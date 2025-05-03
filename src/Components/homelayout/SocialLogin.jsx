import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold text-3xl mb-4'>Login with</h1>
            <div className="space-y-4 grid grid-rows-1">
            <button className="btn btn-outline btn-info"> <FaGoogle/> Login with Google</button>
            <button className="btn btn-outline btn-secondary"> <FaGithub/> Login with Github</button>
               
            </div>
        </div>
    );
};

export default SocialLogin;