import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => (
    <Container>
        <footer>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <div className="info float-left">
                        <p>&copy; 2018 - TradePort</p>
                    </div>
                    <div className="links float-right">
                        <p>[Links here]</p>
                    </div>
                </Col>
            </Row>
        </footer>
    </Container>
);

export default Footer;