import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
   return (
      <div>
         <Container>
            <Row>
               <div className='intro-text'>
                  <div>
                     <h1 className='title'>Welcome to Notes App</h1>
                     <p className='subtitle'>
                        One safe place for all your notes.
                     </p>
                  </div>
                  <div className='right'>
                     <img src='../../images/undraw_typewriter2.svg' alt='' />
                  </div>
               </div>
            </Row>
         </Container>
      </div>
   );
};

export default LandingPage;
