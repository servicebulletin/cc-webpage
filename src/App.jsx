import { useState } from 'react'
import './App.css'
import IndexHeader from './IndexHeader.jsx'
import IndexBody from './IndexBody.jsx'
import IndexFooter from './IndexFooter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="overlay">
      <IndexHeader />
      <IndexBody />
      <IndexFooter />
    </div>
  )
}

export default App