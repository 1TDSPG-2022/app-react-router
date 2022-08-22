import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainRoutes from "./routes/MainRoutes"

export default function App() {
    return (
        <div>
            <h1>ROTAS</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
            {/*Estrutura das rotas*/}
            <BrowserRouter>
                <MainRoutes/>
            </BrowserRouter>
        </div>
    )
}