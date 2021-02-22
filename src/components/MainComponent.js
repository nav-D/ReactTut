import React, { Component } from "react";
import {Container, Row} from 'reactstrap';
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from "../shared/dishes.js";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    return (
      <div>
        <Header />
        <Container>
            <Menu
            dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}
            />
            <DishDetail
            dish={
                this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDish
                )[0]
            }
            />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Main;
