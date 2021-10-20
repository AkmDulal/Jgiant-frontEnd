import React, { Component } from 'react';

// import { Link } from "react-router-dom";
// Bootstrap
import { Row, Col } from 'react-bootstrap';
// Images
import ShopBanner from'../images/shop_banner1.jpg';
// Components
import MegaProduct from"./MegaProduct";
import { Link } from "react-router-dom";
class MegaSale extends Component {
    render() {
        return (
            <div>
                <div className="megasale_area">
                    <div className="container-fluid">
                        <Row>
                            <Col lg={3} md={4}>
                                <div className="sale-banner">
                                    <Link to="" className="hover_effect1">
                                        <img src={ShopBanner} alt="shop_banner_img6" /> 
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={9} md={8}>
                                <div className="megasale_product">
                                    <MegaProduct />
                                </div>
                            </Col>
                        </Row>   
                    </div>           
                </div>
            </div>
        );
    }
}

export default MegaSale;