import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>CRAWFORD&CORRY</h1>
        <h4>EMPLOYABLE | EDUCATIONAL | EXPERIENTIAL</h4>
      </div>
      <div>
        <h3>
          With deep expertise, unique access, and extensive resources, we specialise in 
          designing bespoke, secure, and transformative professional placements and work 
          experiences in Vietnam for young adults, available year-round, including summer 
          and gap year programmes.
        </h3>
        <p>
        Our programmes emphasise career development, cultural immersion, and personal 
        enrichment, all curated to help each participant achieve their goals and fulfil 
        their potential. Safety, security, and privacy are our utmost priorities, forming 
        the cornerstone of our approach. Discretion is integral to everything we do, 
        particularly as we work with students and young adults. In keeping with our 
        commitment to exclusivity and trust, we maintain a deliberately minimal public 
        presence and refrain from social media activity. Crawford & Corry was founded by 
        two professionals with backgrounds at Eton and Oxford, combined with extensive 
        on-the-ground experience in Vietnam.
        </p>
      </div>
      <div>
        <p>
        Please <a href="mailto:enquiries@crawfordcorry.com">contact us</a> for enquiries or download our brochure.
        </p>
      </div>
    </>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
