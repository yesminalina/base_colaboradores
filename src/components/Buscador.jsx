import Form from 'react-bootstrap/Form';

const Buscador = ({listaColaboradores, setColaboradoresFilter}) => {
  const inputHandle = (e) => {
    const palabra = e.target.value.toLowerCase()

    const resultado = listaColaboradores.filter(
      (colaborador) => (
        colaborador.nombre.toLowerCase().includes(palabra) || 
        colaborador.correo.toLowerCase().includes(palabra) || 
        colaborador.edad.includes(palabra) || 
        colaborador.cargo.toLowerCase().includes(palabra) || 
        colaborador.telefono.includes(palabra))
    )
  
  setColaboradoresFilter(resultado) 
} 
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="buscador">
          <Form.Control type="text" placeholder="Busca un colaborador" onChange={inputHandle} />
        </Form.Group>
      </Form>
    </div>
  )
}

export default Buscador