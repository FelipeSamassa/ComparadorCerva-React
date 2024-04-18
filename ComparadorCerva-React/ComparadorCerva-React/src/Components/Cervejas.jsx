import React, { useEffect, useState } from 'react'
import style from './Cervejas.module.css'

const Cervejas = ({ nome, imagem, num, ml }) => {

  const [count, setCount] = useState(0)
  const [valor, setValor] = useState('')

  const handleValor = (e) => {
    e.preventDefault()

    const updateValor = (e.target.value)

    setValor(updateValor)
  }

  if(valor > 0) {

  }


  return (
    <div className={style.containerUn}>
      <h3>{nome}</h3>
      <img src={imagem} alt="" />
      <div>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
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
      
    </div>
  )
}

export default Cervejas