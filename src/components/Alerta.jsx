import Alert from 'react-bootstrap/Alert';

const Alerta = ({color, msg}) => {

  return (
  <Alert variant={color}>
    {msg}
  </Alert>
)
}

export default Alerta