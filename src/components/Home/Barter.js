import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import BarterImage from '../../assets/images/barter.png'

const BarterComponent = () => (
    <section className="batering-section">
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img src={BarterImage} className="img-fluid" alt="Bartering" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="info">
                        <div className="title">
                            <span>Batering</span>
                        </div>
                        <div className="description">
                            <p>
                                By using the TradePort
                                StandardMarketplace
                                contract you can now
                                create your own
                                decentralized Amazon.
                        </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);

export default BarterComponent;