import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import { CartContextComp } from './context/cartContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CartContextComp>
          <NavBar />
          <Switch>
            <Route path="/items/:categoryName?">
              <ItemListContainer />
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>   
            <Route path="/cart">
              <Cart />
            </Route>  
            <Route path="/">
              <Home />
            </Route>  
          </Switch>
          <Footer />
        </CartContextComp>
      </div>
    </BrowserRouter>
  );
}

export default App;
