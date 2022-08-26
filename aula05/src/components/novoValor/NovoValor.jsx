import React from 'react';

// import { Container } from './styles';

export default function novoValor() {
  return <div>
    <h1>vamos descrever uma fr</h1>
    <div>
        <label>motivação: </label>
        <input type="text" name='msg' onChange={(e)=> setFrase(e.value)} />
    </div>
    <p>mensagem de motivação do dia: <span>{frase}</span></p>
  </div>
}

