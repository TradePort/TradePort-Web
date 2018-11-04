import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const HeroComponent = () => (
    <section className="hero-section">
        <Container>
            <Row className="align-middle">
                <Col xs={12} sm={12} md={12} lg={7}>
                    <h2 className="hero-text">
                        <p>Immutable,</p>
                        <p>Decentralized,</p>
                        <p>Secure,</p>
                        <p>Digital Smart Cities.</p>
                    </h2>
                </Col>
            </Row>
        </Container>
    </section>
);

export default HeroComponent