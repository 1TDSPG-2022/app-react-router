import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Pagina1 from '../components/pagina1/Pagina1'
import Pagina2 from '../components/pagina2/Pagina'

export default function MainRoutes() {
    return(
        <>
        <Routes>
                <Routes path="/" element={<Home />} />
                <Routes path="/pag1" element={<Pagina1 />} />
                <Routes path="/pag2" element={<Pagina2 />} />
            </Routes>
        </>
    )
}