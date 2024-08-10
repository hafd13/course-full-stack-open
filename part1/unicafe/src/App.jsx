import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log('rendering with good value', good)
  console.log('rendering with neutral value', neutral)
  console.log('rendering with bad value', bad)

  // handle clicks on buttons good, neutral and bad
  const handleClickGood = () => {
    console.log("good clicked, good before = ", good)
    setGood(good+1)
  }
  const handleClickNeutral = () => {
    console.log("neutral clicked, neutral before = ", neutral)
    setNeutral(neutral+1)
  }
  const handleClickBad = () => {
    console.log("bad clicked, bad before = ", bad)
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App