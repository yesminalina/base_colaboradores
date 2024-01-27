import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

const icon = <FontAwesomeIcon icon={faTrash} />

const Listado = ({listaColaboradores, setListaColaboradores, colaboradoresFilter, setColaboradoresFilter}) => {

  const eliminarColaborador = (colaborador) => {
    const listaFiltrada = listaColaboradores.filter(element => element.id !== colaborador.id)
    setListaColaboradores(listaFiltrada)
    setColaboradoresFilter(listaFiltrada)
  }

    const colaboradores = colaboradoresFilter.map((colaborador) => (
        <tr className="align-middle"
        key={colaborador.id}>
        <td>{colaborador.id}</td>
        <td>{colaborador.nombre}</td>
        <td>{colaborador.correo}</td>
        <td>{colaborador.edad}</td>
        <td>{colaborador.cargo}</td>
        <td>{colaborador.telefono}</td>
        <td><Button onClick={() => eliminarColaborador(colaborador)} >{icon}</Button></td>
        </tr>
  ))

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores}
      </tbody>
    </Table>
  )
}

export default Listado