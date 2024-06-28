import { useState } from 'react'
import Form from './components/Form'

function App() {
  const [users, setUsers] = useState([])

  const addUser = newUser => {
    setUsers([...users, newUser])
  }

  return (
    <>
      <Form addUser={addUser} />
      {users.map(currentUser => (
        <p>{currentUser.email}</p>
      ))}
    </>
  )
}

export default App
