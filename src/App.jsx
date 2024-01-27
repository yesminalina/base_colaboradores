import './App.css'
import Buscador from './components/Buscador'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Alerta from './components/Alerta'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BaseColaboradores } from './BaseColaboradores'
import { useState } from 'react'

const App = () => {
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [colaboradoresFilter, setColaboradoresFilter] = useState(listaColaboradores)

  return (
    <main>
      <Buscador/>
      <Listado listaColaboradores={listaColaboradores} 
      setListaColaboradores={setListaColaboradores}
      colaboradoresFilter={colaboradoresFilter}
      setColaboradoresFilter={setColaboradoresFilter} />  
      <Formulario />
      <Alerta />
    </main>
  )
}

export default App