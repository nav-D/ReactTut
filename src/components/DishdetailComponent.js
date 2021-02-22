import React from "react";
import {Card, CardImg, CardImgOverlay,CardBody, CardText, CardTitle,
    Breadcrumb,BreadcrumbItem, Row,Container } from "reactstrap";
import {Link} from 'react-router-dom';


function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle><h4>{dish.name}</h4></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}


function RenderComments({comments}) {
    if(comments != null){
        const  reviews= comments.map((com) => {
            return (       
                <div key={com.id}>
                    <li style={{padding:"0px"}} className="list-group-item border-0">{com.comment}</li>
                    <li style={{padding:"0px"}} className="list-group-item mt-0.5 mb-3 border-0">-- {com.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</li>    
                </div> 
            );
        });
    
        return(
            <div className="col-12 col-md-5 m-1">
                <h3 className="mb-4">Comments</h3>
                <ul className="list-unstyled">
                    {reviews}
                </ul>
            </div>
        ); 
    } else{
        return(
            <div></div>
        );
    }  
}



const DishDetail = (props) => {
    const dish = props.dish;
    if(dish != null) {
        return(
            <Container>
                <Row>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </Row>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
                <Row>
                    <RenderDish dish={props.dish} />  
                    <RenderComments comments = {props.comments} />
                </Row> 
            </Container>
    
        );
    }
    else{
        return(<div></div>);
    }
};


export default DishDetail;