import React, { Component } from 'react';
import BannerComponents from "../components/Banner";
import MegaSale from "../components/MegaSale";
import OfferProduct from "../components/OfferProduct";
import ProductsComponents from "../components/Products"
class Home extends Component {
 
    render() {
        return (
            <div>
                <BannerComponents />
                <MegaSale />
                <OfferProduct />
                <ProductsComponents />
            </div>
        );
    }
}

export default Home;