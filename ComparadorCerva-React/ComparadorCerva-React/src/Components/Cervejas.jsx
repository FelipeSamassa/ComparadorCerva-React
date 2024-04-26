import React, { useEffect, useState } from 'react'
import style from './Cervejas.module.css'

const Cervejas = ({ nome, imagem, num, ml }) => {

  const [count, setCount] = useState(0)
  const [valor, setValor] = useState('')
  const [calculo, setCalculo] = useState('')


  const buttonPlus = () => {
    setCount(count > 0 ? count - 1 : 0)
  }

  const buttonMin = () => {
    setCount(count + 1)
  }

  const handleValor = (e, ...valor) => {

    valor = (e.target.value)
    
    let calculo = valor * count

    setValor(valor)

    setCalculo(calculo)

    console.log(valor)
    console.log(calculo)
  }

  return (
    <div className={style.containerUn}>
      <h3>{nome}</h3>
      <img src={imagem} alt="" />
      <div>
        <button onClick={buttonPlus}>-</button>
        <p>{count}</p>
        <button onClick={buttonMin}>+</button>
      </div>
      <div>
        <span>R$</span>
        <input
          type="number"
          placeholder={num}
          value={valor}
          onChange={handleValor}
        />
        <span>{ml}ml</span>
      </div>
      <div>
        <span>{calculo}</span>
      </div>
    </div>
  )
}

export default Cervejas