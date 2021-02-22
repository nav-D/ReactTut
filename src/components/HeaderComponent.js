import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron, Container, Row} from "reactstrap";

class Header extends Component {
    render() {
        return(
            <>
                <Navbar dark>
                    <Container>
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </Container>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row className="row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>
                                    We take inspiration from the World's best cuisines, and create a
                                    unique fusion experience. Our lipsmacking creations will tickle
                                    your culinary senses!
                                </p>
                            </div>
                        </Row>
                    </Container>
                </Jumbotron>

            </>
        );
    }
}

export default Header;