import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay,CardBody, CardText, CardTitle, Row } from "reactstrap";


class Menu extends Component {


  render() {
    const menu = this.props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick = {() => this.props.onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>  
                    <CardImgOverlay>
                        <CardTitle><h4>{dish.name}</h4></CardTitle>
                    </CardImgOverlay>
                </Card>
            </div> 
        );
    });

    return (
      <Row>
          {menu}
      </Row>
    );
  }
}

export default Menu;
