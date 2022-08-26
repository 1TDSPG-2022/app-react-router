import React, { useState } from 'react'

export default function NovoValor() {
  const [frase, setFrase] = useState('')

  // const vetor1 = ['maçã', 'banana', 'laranja']

  // console.log(vetor1[2])

  // const { laranja } = vetor1[2]
  // console.log(laranja)

  // const pessoa = {
  //   nome: 'Guilherme',
  //   idade: 18
  // }

  // console.log(pessoa)
  // const { nome } = pessoa
  // console.log(nome)

  return (
    <div>
      <h1>Vamos escrever uma frase.</h1>
      <div>
        <label htmlFor="">Motivação: </label>
        <input
          type="text"
          name="msg"
          onChange={e => setFrase(e.target.value)}
        />
      </div>
      <p>
        Mensagem de motivação do dia: <span>{frase}</span>{' '}
      </p>
    </div>
  )
}
