import React from 'react'
import { useState } from 'react'

export default function NovoValor() {

    const [frase,setFrase] = useState('')

    //const vetor1 = ["maçã", "banana", "laranja"]

    //Acessando tradicionalmente
    //console.log(vetor1[1])

    //Aplicando o destructuring
    //const { laranja } = vetor1
    //console.log(laranja)

    //const pessoa = {
        //nome : "Isa",
        //idade : 19
    //}

    //console.log(pessoa.nome)

    //const{nome} = pessoa
    //console.log(nome)

  return (
    <div>
        <h1>vamos escrever uma frase.</h1>
        <div>
            <label>Motivação : </label>
            <input type="text" nome="msg" onChange={(e)=> setFrase(e.target.value)} />
        </div>
        <p>Mensagem de motivação do dia : <span>{frase}</span></p>
    </div>
  )
}
