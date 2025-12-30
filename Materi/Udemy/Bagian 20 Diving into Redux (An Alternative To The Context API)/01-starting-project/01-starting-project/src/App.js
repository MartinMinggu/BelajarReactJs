import Counter from './components/Counter';
import Auth from './components/Auth'
import Header from './components/Header'
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {
  const { isAuthentication } = useSelector(state => state.login)
  console.log(isAuthentication);

  return (
    <>
      <Header />
      {
        isAuthentication ?
          <UserProfile /> :
          <Auth />
      }
      <Counter />
    </>
  );
}

export default App;
