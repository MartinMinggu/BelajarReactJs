import { Link, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'

function App() {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/users">Users</Link>
      </nav>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  )
}

export default App
