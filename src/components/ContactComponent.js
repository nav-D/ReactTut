import React from 'react';
import {Container, Breadcrumb, BreadcrumbItem, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
function Contact(props) {
    return(
        <Container>
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
            </Row>
            <div className="col-12">
                <h3>Contact Us</h3>
                <hr/>
            </div>


            <Row className="row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address style={{color:"black",fontSize: "100%"}}>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>:
                        <a style={{color:"black"}} href="mailto:confusion@food.net"
                        >confusion@food.net</a
                        >
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"
                        ><i className="fa fa-phone"></i> Call</a>
                        
                        <a role="button" className="btn btn-info"
                        ><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:"
                        ><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </Row>
        </Container>
    );
}
export default Contact;