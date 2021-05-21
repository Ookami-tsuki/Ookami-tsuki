import React,{Component} from 'react';
import logo from './logo.svg';
import {DISHES} from './shared/dishes'
import{Navbar, NavbarBrand} from 'reactstrap';
import Menu from './component/Menu';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render(){
    return(
      <div className="App">
      <Navbar dark color="primary">
      <div className="container">
      <NavbarBrand href="/">Ristorante Hust</NavbarBrand>
      </div>
      </Navbar>
      <Menu dishes={this.state.dishes} />
      </div>

    );
  }
  
}

export default App;
