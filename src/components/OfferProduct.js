import React, { Component } from 'react';
// Bootstrap
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Add01 from "../images/add01.jpg";
import Add02 from "../images/add02.jpg";
import Add03 from "../images/add03.jpg";
class OfferProduct extends Component {
    render() {
        return (
            <div>
                <div className="offerproduct_area">
                    <div className="container-fluid">
                        <Row>
                            <Col lg={3} md={3}>
                                <div className="sale-banner mb-3 mb-md-4">
                                    <Link to='/' className="banner_add_area hover_effect1"> 
                                        <img src={Add01} alt="images"></img>
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={6} md={6}>
                                <div className="sale-banner mb-3 mb-md-4">
                                    <Link to='/' className="banner_add_area hover_effect1"> 
                                        <img src={Add02} alt="images"></img>
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={3} md={3}>
                                <div className="sale-banner mb-3 mb-md-4">
                                    <Link to='/' className="banner_add_area hover_effect1"> 
                                        <img src={Add03} alt="images"></img>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default OfferProduct;