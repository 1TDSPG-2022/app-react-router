import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../components/home/Home';
import NovoValor from '../components/novoValor/NovoValor';

export default function MainRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/novoValor" element={<NovoValor />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
