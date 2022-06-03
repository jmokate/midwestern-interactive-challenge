import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeMenu from './HomeMenu.js';
import Cards from './Cards.js';
import UsersList from './UsersList.js'
import {Container} from 'react-bootstrap';
import '../App.css';
import logo from "../Assets/Logo.png";
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
    <Container fluid className="homeBody">

    
    <Container>
      <HomeMenu src={logo} />
    </Container>
    
      <Container className="px-4" style={{paddingTop: "3rem"}}>
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
      </Container>
    </>
  );
}

export default Home;
