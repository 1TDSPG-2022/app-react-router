import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "../components/home/Home"
import NovoValor from '../components/home/novoValor/NovoValor'
import Pagina1 from '../components/pagina1/Página1'
import Pagina2 from '../components/pagina2/Pagina2'

export default function MainRoute() {
    return(
        <>
        <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/pag1" element={<Pagina1 />} />
                   <Route path="/pag2" element={<Pagina2 />} />
                   <Route path="/nv" element={<NovoValor/>} />
               </Routes>
        </>
    )
}