import { useState } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import UserForm from './components/UserForm'

function App() {

  const [usuarios, setUsuarios] = useState([])

  const submit = usuario => {
    setUsuarios([
      ...usuarios,
      usuario
    ])
  }
  
  return (
    <Container>
      <Card>
        <UserForm
          submit={ submit }
        />
      </Card>
      <Card>
        <ul>
          { usuarios.map(el =>
            <li key={ el.name }>{`${el.name} ${el.lastname}: ${el.email}`}</li>)}
        </ul>
      </Card>
    </Container>
  );
}

export default App