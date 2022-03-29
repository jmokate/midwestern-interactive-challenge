import react from 'react';
import {Row, Col} from 'react-bootstrap'


function HomeMenu(props) {


  return(
    <>
    <Row className="flex-nowrap">
        <Col md={6} sm={6} xs={6} align="left">
        <img  className="nav-logo img-fluid" src={props.src}/> 
        </Col>   
        <Col md={6} sm={6} xs={6} className="contactLink" align="right">
          contact
          </Col>
      </Row>
    </>
  )
}

export default HomeMenu;
