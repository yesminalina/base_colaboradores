import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 

const Formulario = ({listaColaboradores, setListaColaboradores, colaboradoresFilter, setColaboradoresFilter, setMsgAlerta}) => {

  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: ""
  })

  const handleChange = (newColaborador, name) => {
    const lastColaborador = listaColaboradores[listaColaboradores.length - 1]
    const id = (lastColaborador ? +lastColaborador.id + 1 : 1).toString()
    setFormData({ ...formData, [name]: newColaborador, id })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {nombre, correo, edad, cargo, telefono} = formData
    const validarInput = !nombre || !correo || !edad || !cargo || !telefono
    
    if (validarInput) {
      setMsgAlerta(
      {
        msg: 'Debes llenar todos los campos',
        color: 'danger'
      }
      )
      return
    } else {
      setMsgAlerta(
        {
          msg: 'Colaborador creado exitosamente',
          color: 'success'
        } 
    )
    }

    setListaColaboradores([...listaColaboradores, formData])
    setColaboradoresFilter([...colaboradoresFilter, formData])

    setFormData({
      id: "",
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: ""
    })

  }

  return (
    <>
    <h2>Agregar Colaborador</h2>
    <Form className="mt-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Control 
        type="text" 
        placeholder="Nombre" 
        name="nombre" 
        value={formData.nombre} 
        onChange={(e) => handleChange(e.target.value, e.target.name)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCorreo">
        <Form.Control 
        type="email" 
        placeholder="Correo" 
        name="correo" 
        value={formData.correo} 
        onChange={(e) => handleChange(e.target.value, e.target.name)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEdad">
        <Form.Control 
        type="number" 
        placeholder="Edad" 
        name="edad" 
        value={formData.edad} 
        onChange={(e) => handleChange(e.target.value, e.target.name)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCargo">
        <Form.Control 
        type="text" 
        placeholder="Cargo" 
        name="cargo" 
        value={formData.cargo} 
        onChange={(e) => handleChange(e.target.value, e.target.name)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTelefono">
        <Form.Control 
        type="number" 
        placeholder="Teléfono" 
        name="telefono" 
        value={formData.telefono} 
        onChange={(e) => handleChange(e.target.value, e.target.name)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
    </>
  )
}

export default Formulario