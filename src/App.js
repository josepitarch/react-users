import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App() {
  const [formulario, handleChange] = useFormulario({
    name: '',
    lastname: '',
    email: ''
  })
  
  return (
    <Container>
      <Card>
        <form>
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
      </Card>
    </Container>
  );
}

export default App