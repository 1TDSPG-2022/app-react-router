import React from 'react';
import './App.css';
import {BrowserRouter, Link} from 'react'
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <h1>Rotas</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="Pag1">Pagina 1</Link></li>
        <li><Link to="Pag2">Pagina 2</Link></li>
      </ul>
      <BrowserRouter>
        <MainRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
