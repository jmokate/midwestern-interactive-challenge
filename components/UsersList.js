import react from 'react'
import {Row, Col} from 'react-bootstrap';

function UsersList({handleClick, isList, usersArray}) {

    return(
        <>
        <Row>
          <Col style={{}}>
            <h1 style={{color: '#f5f5f5', fontSize: '50px', fontWeight: 'bold'}}>Heading One</h1>
            <hr style={{color: '#debf79', width: "12rem", height: '.5rem', opacity: '100'}}/>
            <p style={{color: '#f5f5f5'}} onClick={handleClick} >
                Click here for the users list.
            </p>
            <ul style={{color: '#f5f5f5'}} >

                { isList ? usersArray.map(user =>  <li key={user}>{user}</li>) : ''}
                
            </ul>
          </Col>
        </Row>
        </>

    )
}

export default UsersList;