import Table from 'react-bootstrap/Table'

const Listado = ({listaColaboradores, setListaColaboradores, colaboradoresFilter, setColaboradoresFilter}) => {
    const colaboradores = colaboradoresFilter.map((colaborador) => (
        <tr className="align-middle"
        key={colaborador.id}>
        <td>{colaborador.id}</td>
        <td>{colaborador.nombre}</td>
        <td>{colaborador.correo}</td>
        <td>{colaborador.edad}</td>
        <td>{colaborador.cargo}</td>
        <td>{colaborador.telefono}</td>
        <td>Eliminar</td>
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