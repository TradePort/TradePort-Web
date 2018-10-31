import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Home = () => (
    <section className="hero">
        <Container>
            <Row>
                <Col>
                    <h1 className="hero-text">
                        <p>Immutable,</p>
                        <p>Decentralized,</p>
                        <p>Secure,</p>
                        <p>Digital Smart Cities.</p>
                    </h1>
                </Col>
            </Row>
        </Container>
    </section>
);

export default Home;