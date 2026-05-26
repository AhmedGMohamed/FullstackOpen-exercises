import { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '1234531435' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.find(p => p.name === newName)) {
      window.alert(`${newName} already exists`)
      return
    }
    if (persons.find(p => p.number === newNumber)) {
      window.alert(`Phone Number ${newNumber} already exists`)
      return
    }
    const newPersons = persons.concat({ name: newName, number: newNumber });
    setPersons(newPersons);
    setNewName('');
    setNewNumber('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(e) => { setNewName(e.target.value); }} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => { setNewNumber(e.target.value) }} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons} />
    </div>
  )
}

export default App