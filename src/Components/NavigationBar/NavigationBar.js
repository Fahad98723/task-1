import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css'
const NavigationBar = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg"   sticky= 'top' className='bg-white navigation mt-3 '>
        <Container>
        <Navbar.Brand className='logo text-black fw-bold fs-1'>Logo</Navbar.Brand>
        <Navbar.Toggle className='' />
             <Navbar.Collapse className="justify-content-end menu">
                 <Nav.Link >                        
                    Home
                </Nav.Link>
                 <Nav.Link >                        
                <i style={{ color:'#0CA9F5'}} className="fas fa-image   fs-4 "></i>
                </Nav.Link>
              
             </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default NavigationBar;