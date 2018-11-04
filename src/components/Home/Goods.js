import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const GoodsComponent = () => (
    <section className="goods-section">
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}></Col>
                <Col xs={12} sm={12} md={6} lg={6}>
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
                </Col>
            </Row>
        </Container>
    </section>
);

export default GoodsComponent;