/* eslint-disable */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [fold, setFold] = useState(false)
    return (
        <div className='px-4 md:px-24 lg:px-8 sm:max-w-xl  md:max-w-full lg:max-w-screen-2xl mx-auto'>
            <nav className='relative flex items-center justify-between bg- p-6'>
                {/* Logo section */}
                <NavLink to="/">
                    <img className='w-14' src="../../../public/logo2.png" alt="" />
                </NavLink>

                {/* Nav bar Itemm */}
                <ul className='hidden lg:flex gap-3 items-center'>
                    <li>
                        <NavLink className={`block text-lg font-medium text-blue-700 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={`text-lg font-medium text-blue-700 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="/media">Media</NavLink>
                    </li>
                    <li>
                        <NavLink className={`text-lg font-medium text-blue-700 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="/history">History</NavLink>
                    </li>
                    <li>
                        <NavLink className={`text-lg font-medium text-blue-700 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="hidden-pearls">Hidden Pearls</NavLink>
                    </li>

                    <li>
                        <NavLink className={`text-lg font-medium text-blue-700 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="/parenting">Parenting</NavLink>
                    </li>
                    <li>
                        <NavLink className={`text-lg font-medium text-blue-800 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="/series">Series
                        </NavLink>
                    </li>
                </ul>
                <div className='lg:hidden'>
                    <button onClick={() => setFold(true)} className=''>
                        <Bars3BottomRightIcon className='size-10' />
                    </button>
                    {
                        fold && (
                            <div className='absolute top-0 left-0 w-full z-10 justify-between'>
                                <div className='bg-white p-6 border rounded-md shadow-xl'>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <NavLink to="/">
                                                <img className='w-14' src="../../../public/logo2.png" alt="" />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button onClick={() => setFold(false)}>
                                                <XMarkIcon className='size-10 text-red-600' />
                                            </button>
                                        </div>
                                    </div>

                                    {/* mobile nav bar */}
                                    <nav>
                                        <ul className=''>
                                            <li className='text-lg font-medium text-blue-700'>
                                                <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                                            </li>
                                            <li className='text-lg font-medium text-blue-700'>
                                                <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/media">Media</NavLink>
                                            </li>
                                            <li className='text-lg font-medium text-blue-700'>
                                                <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/history">History</NavLink>
                                            </li>
                                            <li className='text-lg font-medium text-blue-700'>
                                                <NavLink className={({ isActive }) => isActive ? "active" : ""} to="hidden-pearls">Hidden Pearls</NavLink>
                                            </li>

                                            <li className='text-lg font-medium text-blue-700'>
                                                <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/parenting">Parenting</NavLink>
                                            </li>
                                            <li className='text-lg font-medium text-blue-700'>
                                                <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/series">Series
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )
                    }
                </div>
            </nav>
        </div >
    );
};

export default Header;


/*
<ul className=''>
                                        <div>
                                            <NavLink className={`block text-lg font-medium text-blue-700 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="/">Home</NavLink>
                                        </div>
                                        <div>
                                            <NavLink className={`block text-lg font-medium text-blue-700 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="/media">Media</NavLink>
                                        </div>
                                        <div>
                                            <NavLink className={`block text-lg font-medium text-blue-700 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="/history">History</NavLink>
                                        </div>
                                        <div>
                                            <NavLink className={`block text-lg font-medium text-blue-700 ({ isActive }) =>
                    isActive
                        ? "active" : ""`} to="hidden-pearls">Hidden Pearls</NavLink>
                                        </div>

                                        <div>
                                            <NavLink className={`block text-lg font-medium text-blue-700 ({ isActive }) =>
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

*/