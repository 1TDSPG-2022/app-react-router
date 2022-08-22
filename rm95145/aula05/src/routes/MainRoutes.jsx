import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "../components/home/Home"
import Pagina1 from "../components/pagina1/Pagina1"
import Pagina2 from "../components/pagina2/Pagina2"

export default function MainRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pag1" element={<Pagina1 />} />
                <Route path="/pag2" element={<Pagina2 />} />
            </Routes>
        </>
    )
}