import { Fragment } from 'react';
import './App.css'
import { Header } from './component/Header.jsx';
import { Main } from "./component/Main.jsx";

function App() {
  return (
    <>
      {/* <Fragment> */}
      <Header />
      <Main />
      {/* </Fragment> */}
    </>
  )
}

export default App
