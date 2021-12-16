import Input from './Input'
import Button from './Button'
import useFormulario from '../hooks/useFormulario'

const UserForm = ({ submit }) => {

    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        lastname: '',
        email: ''
      })

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }

    return (
        <form onSubmit={ handleSubmit }>
          <Input
            label='Nombre'
            name='name'
            onChange={ handleChange }
            value={ formulario.name }
          />
          <Input
            label='Apellido'
            name='lastname'
            onChange={ handleChange }
            value={ formulario.lastname }
          />
          <Input
            label='Correo'
            name='email'
            onChange={ handleChange }
            value={ formulario.email }
          />
          <Button>Enviar</Button>
        </form>
    )
}

export default UserForm