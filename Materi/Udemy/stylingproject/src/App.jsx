import { useState } from 'react'
import Header from './component/Header.jsx'
import AuthInputs from './component/AuthInputs.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>    </>
  )
}

export default App
