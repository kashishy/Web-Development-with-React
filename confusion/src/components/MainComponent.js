import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    //selectish based on dishID
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }

    render() {
        return (
        <div>
            <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
            </Navbar>
            {/*setting state of the component and passing details to MenuComponent*/}
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            {/*passing selected dish details to the DishDetail Component*/}
            {/*0 for selecting only one item*/}
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
        );
    }
}

export default Main;