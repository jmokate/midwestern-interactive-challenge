import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeMenu from '../components/HomeMenu.js';
import CardGroup from '../components/CardGroup.js';
import UsersList from '../components/UsersList.js'
import {Container} from 'react-bootstrap';
import logo from "../assets/Logo.png";
import talkie from "../assets/Talkie.png";
import rabbit from "../assets/Rabbit.png";
import shield from "../assets/Shield.png";
import usersArray from '../Users.js';

const defaultEndPoint = 'https://api.mwi.dev/content/home';

export async function getServerSideProps() {
  const res = await fetch(defaultEndPoint)
  const response = await res.json();
  return {
    props: {
      response
    }
  }

}

export default function Home({response}) {
  

let {data} = response;
  console.log('results baby', data)

 const [isList, setList] = useState(false);
 

 function handleClick() {
   if (isList) {alert("List is already displayed.")}
   setList(true)

 }

  return (
    <>
    <Container fluid className="homeBody" style={{minHeight: '100vh'}}>
      
   
      <Container>
        <HomeMenu src={logo} />
      </Container>
      
        <Container className="px-4" style={{paddingTop: "3rem"}}>
          <CardGroup
            data={data}
            talkie={talkie}
            rabbit={rabbit}
            shield={shield}
          />
        </Container>
        <Container className="px-4 mt-5" >
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

