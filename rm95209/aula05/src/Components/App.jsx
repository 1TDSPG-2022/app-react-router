import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function APP(){
    return (
        <div>
            <h1>ROTAS</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/src/Components/" element={<Home />} />
                    <Route path="/pagina2" element={<Pagina2 />} />
                    <Route path="/pagina3" element={<Pagina3 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}