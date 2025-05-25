import { useState } from 'react'
import './App.css'
import IndexHeader from './IndexHeader.jsx'
import IndexBody from './IndexBody.jsx'
import IndexFooter from './IndexFooter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="overlay">
      <head>
        <meta property="og:site_name" content="CC"></meta>
      </head>
      <IndexHeader />
      <IndexBody />
      <IndexFooter />
    </div>
  )
}

export default App