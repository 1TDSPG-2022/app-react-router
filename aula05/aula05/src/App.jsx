import React from "react";
import { Link } from "react-router-dom"
import MainRoutes from "./routes/mainRoutes";

export default function App(){
    return (
        <div>
            <h1>NOTAS</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pag1">Pagina1 - 1</Link></li>
                <li><Link to="/pag2">Pagina1 - 2</Link></li>
            </ul>
            {/* Estrutura das rotas */}
                <MainRoutes/>
             {/* Estrutura das rotas */}    
        </div>
    )
}
{/* inicia p bloco das rotas */} 
{/* gerencia as rotas */}
{/* Route, cria a rota */}
{/* path, atributo que associa o path ao componente */}
{/* Home, componente que sera carregado quando a rota for carregada */}