import React from 'react';
import {Container, Row} from 'reactstrap';
import {Link} from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
            <Container>
                <Row>
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled foot-nav">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contact us">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5 address">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i> : +852 1234 5678<br />
                        <i className="fa fa-fax"></i> : +852 8765 4321<br />
                        <i className="fa fa-envelope"></i> :
                        <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                        <a
                            className="btn btn-social-icon btn-google"
                            href="http://google.com/+"
                            ><i className="fa fa-google-plus fa-lg social-media"></i
                        ></a>
                        <a
                            className="btn btn-scoial-icon btn-facebook"
                            href="http://www.facebook.com/profile.php?id="
                            ><i className="fa fa-facebook fa-lg social-media"></i
                        ></a>
                        <a
                            className="btn btn-social-icon btn-linkedin"
                            href="http://www.linkedin.com/in/"
                            ><i className="fa fa-linkedin fa-lg social-media"></i
                        ></a>
                        <a
                            className="btn btn-social-icon btn-twitter"
                            href="http://twitter.com/"
                            ><i className="fa fa-twitter fa-lg social-media"></i
                        ></a>
                        <a
                            className="btn btn-social-icon btn-google"
                            href="http://youtube.com/"
                            ><i className="fa fa-youtube fa-lg social-media"></i
                        ></a>
                        <a className="btn btn-social-icon" href="mailto:"
                            ><i className="fa fa-envelope fa-lg social-media"></i
                        ></a>
                        </div>
                    </div>
                </Row>
                <Row className="justify-content-center">
                <div className="col-auto copyright">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
                </Row>
            </Container>

      </div>
    );
}

export default Footer;