import React from 'react'
import { Navbar, Nav, NavItem, NavLink, Container, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import logoImg from '../logo.png'


class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <header className="header">
                <Navbar light expand="lg">
                    <Container>
                        <NavbarBrand href="/">[TradePort Logo Here]</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/whitepaper">Whitepaper</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/bounties">Bounties</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/blog">Blog</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default HeaderComponent;