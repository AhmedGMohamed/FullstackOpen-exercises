import { useState } from 'react'



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
  const [highest, setHighest] = useState(0)

  const randomNumGen = () => parseInt((Math.random() * anecdotes.length * 10) % anecdotes.length);
  const handleSetVotes = () => {
    const newVotes = { ...votes };
    newVotes[selected] = (newVotes[selected] || 0) + 1
    setVotes(newVotes);
    if ((newVotes[selected] || 0)  > (newVotes[highest] || 0)) {
      setHighest(selected)
    }
  }

  return (
    <div>
      <h1>anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected] || 0} votes</p>
      <button onClick={() => { handleSetVotes() }}>Vote</button>
      <button onClick={() => { setSelected(randomNumGen()) }}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[highest]}<br />has {votes[highest] || 0} votes</p>
    </div>
  )
}

export default App