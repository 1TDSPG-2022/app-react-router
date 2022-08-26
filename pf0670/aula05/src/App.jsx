import React from "react"
import { Link } from "react-router-dom"
import MainRoutes from "./routes/MainRoutes"


export default function App() {
    return (
        <div>
            <h1>ROTAS</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pag1">Página - 1</Link></li>
                <li><Link to="/pag2">Página - 2</Link></li> 
                <li><Link to="/nv">Novo Valor</Link></li> 
            </ul>
            {/* Estrutura das rotas */}
            <MainRoutes />
            {/* Estrutura das rotas */}
        </div>
    )
}