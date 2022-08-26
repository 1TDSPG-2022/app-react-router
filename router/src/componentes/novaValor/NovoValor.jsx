import React,{useEffect, useState} from 'react'

export default function NovoValor() {
    const [frase, setFrase] = useState('')
    return (
    <div>
        <h1>Vamos escrever uma frase</h1>
        <label>motivação:</label>
        <input type="text" name='msg' onChange={(e) =>setFrase(e.target.value)}/>
        <p>A palavra de motivação de hoje é <span>{frase}</span></p>
    </div>
        )
}
