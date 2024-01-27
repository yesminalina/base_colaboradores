import './App.css'
import Buscador from './components/Buscador'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Alerta from './components/Alerta'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <main>
      <Buscador/>
      <Listado/>
      <Formulario />
      <Alerta />
    </main>
  )
}

export default App