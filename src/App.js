import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import Layout from "./components/layout/Layout";
import HomePages from "./pages/Home";
import SingleCatagores from "./pages/SingleCatagores";
import ProductsDetails from "./pages/ProductsDetails";
import ScrollToTop from "./components/ScrollToTop"
class App extends Component {
  render() {
    return (
        <div className="App">
        <Layout>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={HomePages}></Route>
            <Route exact path="/catagores" component={SingleCatagores}></Route>
            <Route exact path="/products-details" component={ProductsDetails}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

