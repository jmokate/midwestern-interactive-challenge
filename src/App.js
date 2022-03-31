import react, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeMenu from './Components/HomeMenu.js'
import Cards from './Components/Cards.js'
import {Container, Row, Col, Card, Button, Image} from 'react-bootstrap';
import './App.css';
import logo from "./Assets/Logo.png"
//import Cards from './Cards.js'
import talkie from "./Assets/Talkie.png"
import rabbit from "./Assets/Rabbit.png"
import shield from "./Assets/Shield.png"
import usersArray from './Users.js'





console.log(usersArray, 'hi');


function App() {

 const [isList, setList] = useState(false);
 

 function handleClick(event) {
   if (isList) {alert("List is already displayed.")}
   console.log(event)
   setList(true)

 }

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
        <Row>
          <Col style={{}}>
          <h1 style={{color: '#f5f5f5', fontSize: '50px', fontWeight: 'bold'}}>Heading One</h1>
          <hr style={{color: '#debf79', width: "12rem", height: '.5rem', opacity: '100'}}/>
          <p style={{color: '#f5f5f5'}} onClick={(e) => handleClick(e)} >Click here for the users list.</p>
          <ul style={{color: '#f5f5f5'}} >

             { isList ? usersArray.map(user =>  <li key={user}>{user}</li>) : ''}
          </ul>
          </Col>
        </Row>
        
      </Container>
        
       
    
    </>
  );
}

export default App;
