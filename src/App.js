import react, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home.js'
import Contact from './Components/Contact.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';




function App() {
  return(
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  
  )
}

export default App;
