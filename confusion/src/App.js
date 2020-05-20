import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap'; 
import './App.css';
import { DISHES} from './shared/dishes';

//component returns a set of react elements that should be appear on screen
//it enables to split ui into multiple independent reusable components, it also accept inputs
//name always starts with capital letter
class App extends Component {

  constructor(props) {
    super(props);

    //lifting in this component
    this.state = {
        dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        {/*displaying menu component below navbar and props*/}
        <Menu dishes={this.state.dishes}/>
      </div>
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/ 
    );
  }
}

export default App;
