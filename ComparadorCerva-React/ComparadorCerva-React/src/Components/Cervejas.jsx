import React from 'react'
import style from './Cervejas.module.css'

const Cervejas = ({nome, imagem, num, ml}) => {
  return (
    <div className={style.containerUn}>
        <h3>{nome}</h3>
        <img src={imagem} alt="" />
        <div>
            <button>+</button>
            <span>0</span>
            <button>-</button>
        </div>
        <span>R$</span> 
        <input type="number" placeholder={num}/>
        <span>{ml}ml</span>
    </div>
  )
}

export default Cervejas