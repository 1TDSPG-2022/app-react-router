import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/home/Home"

export default function App(){
    return(
        <div>
            <h1>ROTAS</h1>
            {/*Estrutura das rotas*/}
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Home />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}