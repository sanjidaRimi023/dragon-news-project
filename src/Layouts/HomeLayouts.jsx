import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homelayout/LeftAside';
import RightAside from '../Components/homelayout/RightAside';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header/>
                {import.meta.env.VITE_name}
                <section className='container mx-auto'>
                <LatestNews/>
                </section>
                <nav className='container mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            
            <main className='container mx-auto my-3 grid grid-cols-12 gap-3'> 
               <aside className='col-span-3'>
                <LeftAside></LeftAside>
               </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                <RightAside>
                
                </RightAside>
               </aside>
            </main>

        </div>
    );
};

export default HomeLayouts;