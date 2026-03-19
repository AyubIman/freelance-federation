import {Link, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Page404 from './pages/Page404';
 
import './App.css'

function App() {

  return (
   <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
    </nav>
    <Routes >
      <Route path='/' element={<Landing/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='*' element={<Page404/>} />
    </Routes>
   </div>
      
  )
}

export default App
