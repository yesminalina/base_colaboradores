import './App.css'
import Buscador from './components/Buscador'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Alerta from './components/Alerta'
import Title from './components/Title'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BaseColaboradores } from './BaseColaboradores'
import { useState } from 'react'

const App = () => {
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [colaboradoresFilter, setColaboradoresFilter] = useState(listaColaboradores)

  const [msgAlerta, setMsgAlerta] = useState({
    msg: "",
    color: "",

  })

  const {msg, color, error} = msgAlerta

  return (
    <main>
      <Title/>
      <Buscador listaColaboradores={listaColaboradores}
      setColaboradoresFilter={setColaboradoresFilter}/>
      <section className='colaboradores row row-cols-1 row-cols-md-2'>
        <div className='col col-12 col-md-8'>
          <Listado
          listaColaboradores={listaColaboradores} 
          setListaColaboradores={setListaColaboradores}
          colaboradoresFilter={colaboradoresFilter}
          setColaboradoresFilter={setColaboradoresFilter}/>
        </div>

        <div className='col col-12 col-md-4'>
          <Formulario 
          listaColaboradores={listaColaboradores} 
          setListaColaboradores={setListaColaboradores}
          colaboradoresFilter={colaboradoresFilter}
          setColaboradoresFilter={setColaboradoresFilter}
          setMsgAlerta={setMsgAlerta}
          msgAlerta={msgAlerta}/>
          <Alerta 
          msg={msg}
          color={color}
          />
        </div>
      </section>
    </main>
  )
}

export default App