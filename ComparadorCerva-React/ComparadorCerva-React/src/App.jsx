import style from './App.module.css'
import Cervejas from './Components/Cervejas'
import cracudinha from './assets/cracudinha.png'
import latao from './assets/latao.jpg'
import litrao from './assets/litrao2.jpg'

function App() {

  return (
    <main className={style.main}>
      <h1 className={style.title}>Comparador de Cerveja</h1>
      <div className={style.container}>
        <Cervejas
          nome="Cracudinha"
          imagem={cracudinha}
          num={2.39}
          ml={300}
        />
        <Cervejas
          nome="Latão"
          imagem={latao}
          num={3.99}
          ml={479}
        />
        <Cervejas
          nome="Litrão"
          imagem={litrao}
          num={7.89}
          ml={1000}
        />
      </div>
    </main>
  )
}

export default App
