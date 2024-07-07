/* eslint-disable */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, isOpen] = useState(false)
    return (
        <nav className='flex items-center justify-between p-6 bg-blue-300'>
            {/* <h1 className='text-2xl text-blue-800 font-extrabold'>GeoReligivity</h1> */}
            <NavLink to="/">
                <img className='w-16' src="../../../public/logo2.png" alt="" />
            </NavLink>
            {/* <div className='md:hidden'>
                <span className='w-min'>
                    {open ?
                        <button className='w-min' onClick={() => isOpen(!open)}>
                            <XMarkIcon className="size-10 text-purple-700 hover:text-purple-900" />
                        </button>
                        :
                        <button className='w-min' onClick={() => isOpen(!open)}>
                            <Bars3BottomRightIcon className="size-10 text-purple-700 hover:text-purple-900" />
                        </button>}
                </span>
            </div> */}


            <ul className='md:flex gap-3 items-center'>
                {/*  className='flex gap-3 items-center' */}
                {/*  className={`bg-purple-400 p-4 md:flex absolute md:static duration-500 ${open ? 'top-14' : '-top-52'}`} */}

                <div>
                    <NavLink className={`block text-lg font-medium text-blue-800 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="/">Home</NavLink>
                </div>

                <div>
                    <NavLink className={`block text-lg font-medium text-blue-800 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="/media">Media</NavLink>
                </div>

                <div>
                    <NavLink className={`block text-lg font-medium text-blue-800 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="/history">History</NavLink>
                </div>

                <div>
                    <NavLink className={`block text-lg font-medium text-blue-800 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="hidden-pearls">Hidden Pearls</NavLink>
                </div>

                <div>
                    <NavLink className={`block text-lg font-medium text-blue-800 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="/parenting">Parenting</NavLink>
                </div>

                <div>
                    <NavLink className={`block text-lg font-medium text-blue-800 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="/series">Series
                    </NavLink>
                </div>
            </ul>
            {/* <div>
                <input className='w-full rounded border border-blue-700 py-1' placeholder='Search' type="search" name="" id="" />
            </div> */}
        </nav>
    );
};

export default Header;