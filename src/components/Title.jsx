import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faUsers} size='xl' />

const Title = () => {
  return (
    <section className='apptitle'>
        <i>{icon}</i>
        <h1>Lista de Colaboradores</h1>
    </section>
  )
}

export default Title