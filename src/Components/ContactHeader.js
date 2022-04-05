import React from 'react';

function ContactHeader() {

    return(
        <div className="contactHeadingOne" >
          <h1 style={{color: '#f5f5f5', fontSize: '50px', fontWeight: 'bold'}}>Heading One</h1>
            <hr style={{color: '#debf79', width: "12.5rem", height: '4px', opacity: '100', marginTop: '-1px'}}/>
            <p className='contactHeaderTxt' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos
              eiusmod tempor incididunt ut labore et trace dolore magna aliqua
            </p>
            <p className="contactHeaderTxt" >
              Prion sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum
              varius duis at consectetur lorem.
            </p>
        </div>
    )
}

export default ContactHeader