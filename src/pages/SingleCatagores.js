import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CatagorisBanner from "../images/allCatagoris.jpg";
import { Link } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";
class SingleCatagores extends Component {
    render() {
        return (
            <div>
                <div className="iiner_banner">
                    <img src={CatagorisBanner} alt="banner"></img>
                    <div className="inner_b_text">
                        <h3> All Categories </h3>
                        <p> Home > All Categories </p>
                    </div>
                </div>
                <div className="c___body">
                <div className="container-fluid">
                    <Row>
                        <Col lg={2}>
                            <div className="c__list">
                            <h3> Agriculture (3978931)  </h3>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="c__list">
                            <h3> Agriculture (3978931)  </h3>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="c__list">
                            <h3> Agriculture (3978931)  </h3>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="c__list">
                            <h3> Agriculture (3978931)  </h3>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="c__list">
                            <h3> Agriculture (3978931)  </h3>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="c__list">
                            <h3> Agriculture (3978931)  </h3>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                                <Link to="/"> <VscChevronRight /> Agricultural Waste </Link>
                            </div>
                        </Col>
                    </Row>

                    
{/* 
Animal Products
Beans
Cocoa Beans
Coffee Beans
Farm Machinery & Equipment
Feed
Fresh Seafood
Fruit
Grain
Herbal Cigars & Cigarettes
Mushrooms & Truffles
Nuts & Kernels
Ornamental Plants
Other Agriculture Products
Plant & Animal Oil
Plant Seeds & Bulbs
Timber Raw Materials
Vanilla Beans 

                <h1> ALL CATAGORES </h1> */}
                </div>
                </div>
            </div>
        );
    }
}

export default SingleCatagores;