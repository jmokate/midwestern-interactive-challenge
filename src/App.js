import react, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeMenu from './Components/HomeMenu.js'
import Cards from './Components/Cards.js'
import List from './Components/List.js'
import {Container, Row, Col, Card, Button, Image} from 'react-bootstrap';
import './App.css';
import logo from "./Assets/Logo.png"
import talkie from "./Assets/Talkie.png"
import rabbit from "./Assets/Rabbit.png"
import shield from "./Assets/Shield.png"
import usersArray from './Users.js'





console.log(usersArray, 'hi');


function App() {

 

  return (
    <>
    
    <Container>
      <HomeMenu src={logo} />
    </Container>
    
      <Container className="px-4" style={{paddingTop: "3%"}}>
        <Cards
          talkie={talkie}
          rabbit={rabbit}
          shield={shield}
         />
      </Container>
      <Container className="px-4 mt-5">
       
        <List
          usersArray={usersArray} />
        
      </Container>
        
       
    
    </>
  );
}

export default App;
