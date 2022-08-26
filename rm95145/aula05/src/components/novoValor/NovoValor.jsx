import React from 'react'
import { useState } from 'react'

export default function NovoValor() {
    
    const [frase,setFrase] = useState('')

    //const vetor1 = ["maça", "banana", "laranja"]
    //Acessando tradicionalmente
    //console.log(vetor1[1])

    //Aplicando o destructuring 
    //const { laranja } = vetor1
    //console.log(laranja)

    //const pessoa = {
    //    nome : "Tiemy",
    //    idade: 20
    //}

    //console.log(pessoa.nome)
    //const{nome} = pessoa
    //console.log(nome)


  return (
    <div>
        <h2>Vamos escrever uma frase:</h2>
        <div>
            <label>Motivação:</label>
            <input type="text" name="msg" onChange={(e)=> setFrase(e.target.value)} />
        </div>
        <p>Mensagem de motivação do dia : <span>{frase}</span></p>
    </div>
  )
}
