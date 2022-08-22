import React from 'react';
import {Routes, Route} from 'react'
import Home from '../components/Home/Home';
import Pag1 from '../components/Pag1/Pag1';
import Pag2 from '../components/Pag2/Pag2';

export default function MainRoutes() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/" element={<Pag1/>}/>
                <Route path="/" element={<Pag2/>}/>
            </Routes>
        </>
    )
}