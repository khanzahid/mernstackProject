import { useEffect, useState } from 'react'
import {Routes, Route } from 'react-router-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';


function App() {
  const [myData, setMyData] = useState([])
 
  useEffect( () => {
    axios.get('/api/user').then( res => {
      
      setMyData(res.data)
    })
  }, []);
  return (
  
    <div className="container">
    <Navbar />
      <Routes>
        <Route path="/"  element={ <Home myData={myData} /> } />
        <Route path="/about"  element={ <About /> } />
        <Route path="/contact"  element={ <Contact /> } />
      </Routes>
 
    </div>

  )
}

export default App
