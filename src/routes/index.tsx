import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Smurfs from '../pages/Smurfs';
import Boost from '../pages/Boost';
import Partner from '../pages/Partner';

const Pages = () => {
    return (         
        <Routes>
            <Route path='/' element={<Home/>} />   
            <Route path='/Smurfs' element={<Smurfs/>} />    
            <Route path='/Boost' element={<Boost/>} />     
            <Route path='/Partner' element={<Partner/>} />   
        </Routes>
    );
    }
export default Pages;