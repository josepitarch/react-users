import useFormulario from './hooks/useFormulario'
import Input from './components/Input'

function App() {
  const [formulario, handleChange] = useFormulario({
    name: '',
    lastname: ''
  })
  
  return (
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
    </form>
  );
}

export default App