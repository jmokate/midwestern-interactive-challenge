import {Navbar, Nav, Image, Container} from 'react-bootstrap'
import './App.css';
import logo from "./Assets/Logo.png"

function App() {
  return (
    <>
    
    <Navbar activeKey="/home" class='container' expand='lg' fixed='top'>
    
      <Navbar.Brand class='img-fluid' className='nav-logo'>
      <Image fluid src={logo}/> 
      </Navbar.Brand>
      <Nav className='justify-content-right'>
      
        <Nav.Link href="#contact" className='contactLink' >
         contact
        </Nav.Link>
       
     
      </Nav>
     
    </Navbar>
    
    
    </>
  );
}

export default App;
