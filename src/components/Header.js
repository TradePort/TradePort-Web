import React, { PureComponent } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    Container
} from 'reactstrap';
import { Logo } from './Icon';

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { isOpen } = this.state;
        return (
            <Navbar light expand="lg">
                <Container>
                    <NavbarBrand href="/">
                    <Logo path="" alt="Trade Port" size={40}/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={isOpen} navbar>
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
        );
    }
}

export default Header;