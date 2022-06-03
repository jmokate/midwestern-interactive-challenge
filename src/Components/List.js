import react from 'react';
import {Row, Col} from 'react-bootstrap';

function List(props) {

  return(
    <>
    <Row >
          <Col >
          <h1 style={{color: '#f5f5f5', fontSize: '50px', fontWeight: 'bold'}}>Heading One</h1>
          <hr style={{color: '#debf79', width: "12rem", height: '5%', opacity: '100'}}/>
          <p style={{color: '#f5f5f5'}} >Click here</p>
          <ul style={{color: '#f5f5f5'}}>

            {props.usersArray.map(user =>  <li key={user}>{user}</li>)}
          </ul>
          </Col>
        </Row>
    </>

  )
}
export default List