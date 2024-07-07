/*eslint-disable */
import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className='text-5xl text-blue-800 font-bold'>This is home</h1>
        </div>
    );
};

export default Home;