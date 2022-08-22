import React from "react";
import { Link } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

export default function App(){
    return(
        <div>
            <h1>Rotas</h1>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="pag1">Página 01</Link></li>
                <li><Link to="pag2">Página02</Link></li>
            </ul>
            {/* Estrutura das rotas */}
                <MainRoutes />
        </div>
    )
}