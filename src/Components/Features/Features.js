import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Features.css'
const Features = () => {
    return (
        <div className='container-fluid'>
                <Row> 
                    <Col lg='6' className='text-white  features-left' >
                        <div className='mb-5'>
                        <h1 style={{fontSize:'40px'}} className='fw-bold mb-4'>Proin <br /> facilisis <br /> risus mus a.</h1>
                        <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, inventore vitae doloremque laudantium dicta esse autem</p>
                        </div>

                        <p><i className="fas fa-search p-3   rounded-circle me-3"></i>Amet vitae pellentesque iaculis metus est</p>
                        <p><i className="fas fa-lock p-3   rounded-circle me-3"></i>Orci nunc eu cras amet cursus leo in elit</p>
                    </Col>

                    <Col lg='6' className='text-black bg-white rounded   align-items-center' >
                        <div className="image-icons mt-3">
                        <p style={{textAlign:'right', color:'#0CA9F5'}}><i className="fas fa-image  p-2 fs-4 "></i></p>
                        </div>

                        <div className='features-right'>
                        <div className="feature d-flex align-items-center mb-4">
                            <div className="icon">
                            <i className="fas fa-trash p-3   rounded-circle me-3"></i>
                            </div>
                            <div className="texts">
                                <h6 className='fw-bold'>Features</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, impedit adipisicing elit. Laborum, impedit!</p>
                            </div>
                        </div>
                        <div className="feature d-flex align-items-center mb-4">
                            <div className="icon">
                            <i className="fas fa-trash p-3   rounded-circle me-3"></i>
                            </div>
                            <div className="texts">
                                <h6 className='fw-bold'>Features</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, impedit adipisicing elit. Laborum, impedit!</p>
                            </div>
                        </div>
                        <div className="feature d-flex align-items-center ">
                            <div className="icon">
                            <i className="fas fa-trash p-3   rounded-circle me-3"></i>
                            </div>
                            <div className="texts">
                                <h6 className='fw-bold'>Features</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, impedit adipisicing elit. Laborum, impedit!</p>
                            </div>
                        </div>
                        </div>

                    </Col>
                </Row>
        </div>
    );
};

export default Features;