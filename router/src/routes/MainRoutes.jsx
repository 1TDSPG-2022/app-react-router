import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../componentes/home/Home.jsx";
import NovoValor from "../componentes/novaValor/NovoValor.jsx";
import Pagina1 from "../componentes/Pagina1/Pagina1.jsx";
import Pagina2 from "../componentes/pagina2/Pagina2.jsx";


export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/pag1" element={<Pagina1 />}/>
            <Route path="/pag2" element={<Pagina2 />} />
            <Route path="/NovoValor" element={<NovoValor />} />
        </Routes>
    )
}