import react, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home.js'
import Cards from './Components/Cards.js'

import {BrowserRouter, Routes, Route} from 'react-router-dom';




function App() {
  return(
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Cards/>}/>
    </Routes>
  
  )
}

export default App;
