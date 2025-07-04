import { useState } from 'react'
import Header from './component/Header.jsx'
import AuthInputs from './component/AuthInputs.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className='p-4'>
        <AuthInputs />
      </main>    </>
  )
}

export default App
