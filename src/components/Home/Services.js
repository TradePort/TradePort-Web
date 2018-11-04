import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ServicesImage from '../../assets/images/services.png'

const ServicesComponent = () => (
    <section className="services-section">
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="info">
                        <div className="title">
                            <span>Services Trade</span>
                        </div>
                        <div className="description">
                            <p>
                                TradePort creates global ports
                                of trade using mobile
                                technologies to allow the
                                creating of smart cities.
                        </p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img src={ServicesImage} className="img-fluid" alt="Services Trade" />
                </Col>
            </Row>
        </Container>
    </section>
);

export default ServicesComponent;