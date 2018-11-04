import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import GoodsImage from '../../assets/images/iu-4.jpeg'

const GoodsComponent = () => (
    <section className="goods-section">
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img src={GoodsImage} className="img-fluid" alt="Goods Trade" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="info">
                        <div className="title">
                            <span>Goods Trade</span>
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

export default GoodsComponent;