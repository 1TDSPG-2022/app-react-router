import React from "react";
import { Link } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

export default function App(){

    return(
        <div>
            <h1>rotas</h1>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/pag1">pag1</Link></li>
                <li><Link to="/pag2">pag2</Link></li>
            </ul>
            <MainRoutes />
        </div>
    )
}