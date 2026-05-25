import { useState } from 'react'

const Button = ({ text, onClick }) =>
  <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) => <p>{text} {value}</p>

const Statistics = ({ stats }) =>
  <>
    <h1>statistics</h1>
    {stats.total > 0 ? (<>
      <StatisticLine text="good" value={stats.good} />
      <StatisticLine text="neutral" value={stats.neutral} />
      <StatisticLine text="bad" value={stats.bad} />
      <StatisticLine text="total" value={stats.total} />
      <StatisticLine text="average" value={stats.average} />
      <StatisticLine text="positive" value={stats.positive + "%"} />
    </>
    ) : (<p>No feedback given</p>)}
  </>


const App = () => {
  const [stats, setStats] = useState({ good: 0, neutral: 0, bad: 0, total: 0, average: 0, positive: 0 })

  function calculateStats(good, neutral, bad) {
    const results = {}
    results.total = good + neutral + bad;
    results.average = (good - bad) / results.total;
    results.positive = good / results.total;
    return results;
  }

  const handleSetGood = () => {
    const newGood = stats.good + 1;
    const newStats = calculateStats(newGood, stats.neutral, stats.bad);
    setStats({ ...stats, good: newGood, ...newStats });
  }

  const handleSetNeutral = () => {
    const newNeutral = stats.neutral + 1;
    const newStats = calculateStats(stats.good, newNeutral, stats.bad);
    setStats({ ...stats, neutral: newNeutral, ...newStats });
  }

  const handleSetBad = () => {
    const newBad = stats.bad + 1;
    const newStats = calculateStats(stats.good, stats.neutral, newBad);
    setStats({ ...stats, bad: newBad, ...newStats })
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleSetGood} text="good" />
      <Button onClick={handleSetNeutral} text="neutral" />
      <Button onClick={handleSetBad} text="bad" />
      <Statistics stats={stats}></Statistics>

    </div>
  )
}

export default App