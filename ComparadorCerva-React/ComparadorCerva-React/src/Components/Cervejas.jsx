import React, { useEffect, useState } from 'react'
import style from './Cervejas.module.css'

const Cervejas = ({ nome, imagem, num, ml }) => {

  const [count, setCount] = useState(0)
  const [valor, setValor] = useState('')
  const [calculo, setCalculo] = useState(0)
  const [liquido, setLiquido] = useState(0)

  useEffect(() => {
    const calculando = Number(valor) * count
    setCalculo(calculando)
  }, [count, valor])

  useEffect(() => {
    const liquido = count * ml
    setLiquido(liquido)
  }, [count])

  const buttonPlus = () => {
    setCount(count > 0 ? count - 1 : 0)
  }

  const buttonMin = () => {
    setCount(count + 1)
  }

  const handleValor = (e) => {
    const valor = e.target.value
    setValor(valor)
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
      <div className={style.tela}>
        {calculo !== 0 && <span>{`R$${calculo.toFixed(2).replace('.', ',')}`}</span>}
        {liquido !== 0 && <span>{`${liquido.toFixed(2).replace('.', ',')}ml`}</span>}
      </div>
    </div>
  )
}

export default Cervejas