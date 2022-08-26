import React from 'react'
import { useState } from 'react';

export default function NovoValor() {

    const [msg, setMsg] = useState('');

    return (
        <div>
            <h1>Vamos escrever uma frase.</h1>
            <div>
                <label>Motivação:</label>
                <input type="text" name="msg" onChange={(e) => { setMsg(e.target.value) }} />
            </div>
            <p>Mensagem de motivação do dia: <span>{msg}</span></p>
        </div>
    )
}
