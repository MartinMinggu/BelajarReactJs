import { useState } from 'react';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Header />
      <main>
        {/* <Login /> */}
        const [isLogin, setIsLogin] = useState(false);
        {isLogin ? <Login setIsLoginPage={setIsLogin} /> : <Signup setIsLoginPage={setIsLogin} />}

      </main>
    </>
  );
}

export default App;
