import { useState } from 'react'
import Header from './component/Header.jsx'
import Main from './component/Main.jsx'
import Log from './component/Log.jsx'

function App() {
  const [anuallData, setAnuallData] = useState([]);

  return (
    <>
      <Header />
      <Main handleAnual={setAnuallData} />
      <Log anuallData={anuallData} />
    </>
  )
}
export default App
