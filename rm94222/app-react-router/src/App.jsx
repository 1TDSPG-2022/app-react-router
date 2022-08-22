import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/home/Home"
import Pagina1 from './components/pagina1/Página1'
import Pagina2 from './components/pagina2/Pagina2'


export default function App(){
    return (
        <div>
            <h1>ROTAS</h1>
            {/*Estrutura das rotas*/}
            <BrowserRouter>
               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/pag1" element={<Pagina1 />} />
                   <Route path="/pag2" element={<Pagina2 />} />
               </Routes>
            </BrowserRouter>
        </div>
    )
}