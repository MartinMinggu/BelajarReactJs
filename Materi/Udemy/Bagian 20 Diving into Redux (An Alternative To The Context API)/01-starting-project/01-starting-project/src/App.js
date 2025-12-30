import Counter from './components/Counter';
import Auth from './components/Auth'
import Header from './components/Header'
import { Provider } from 'react-redux';
import store from './store/indexToolkit';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Auth />
      <Counter />
    </Provider>
  );
}

export default App;
