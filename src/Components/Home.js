import react, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeMenu from './HomeMenu.js';
import Cards from './Cards.js';
import UsersList from './UsersList.js'
import {Container, Row, Col, Card, Button, Image} from 'react-bootstrap';
import '../App.css';
import logo from "../Assets/Logo.png";
//import Cards from './Cards.js'
import talkie from "../Assets/Talkie.png";
import rabbit from "../Assets/Rabbit.png";
import shield from "../Assets/Shield.png";
import usersArray from '../Users.js';


function Home() {

 const [isList, setList] = useState(false);
 

 function handleClick() {
   if (isList) {alert("List is already displayed.")}
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
        <UsersList
          handleClick={handleClick}
          isList={isList}
          usersArray={usersArray}
        />
      </Container>
    </>
  );
}

export default Home;
