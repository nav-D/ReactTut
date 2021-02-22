import React from "react";
import { Card, CardImg, CardImgOverlay,CardBody, CardText,
   CardTitle,Container, Row, Breadcrumb ,BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';

function RenderMenuItem({dish}) {
  return (
      <Card>
        <Link to={`/menu/${dish.id}`} style={{color:"black"}}>
          <CardImg width="100%" src={dish.image} alt={dish.name}/>  
          <CardImgOverlay>
              <CardTitle><h4>{dish.name}</h4></CardTitle>
          </CardImgOverlay>
          </Link>
      </Card>
  );
}
  
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
        <div  key={dish.id} className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish} />
        </div> 
      );
  });

  return (
    <Container>
        <Row>
          <Breadcrumb>
            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
        </Row>
        <div className="col-12">
            <h3>Menu</h3>
            <hr/>
        </div>
 
        <Row>
          {menu}
        </Row>
    </Container>
  );
}




export default Menu;
