import React from "react"
import {Link} from 'react-router-dom'
import MainRoutes from "./routes/MainRoutes"

export default function App(){
    return(
        <div>
            <h1>ROTAS</h1>
            <ul>
                <li><Link to="/"/>Home</li>
                <li><Link to="/pag1"/>Pagina-1</li>
                <li><Link to="/pag2"/>Pagina-2</li>
                <li><Link to="/nv"/>Novo Valor</li>
            </ul>
            <MainRoutes/>          
        </div>
    )
}