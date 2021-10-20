import React, { Component } from 'react';
// components
import CatagoryComponents from "./Catagory"
import BannerRight from "./BannerRight"
// Bootstrap
import { Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";

import Slider01 from "../images/slider/slider01.jpg"

class Banner extends Component {
    constructor(props){
        super(props);
        this.state= {
            responsive:{
                0: {
                    items: 1,
                },
                450: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
                1366: {
                    items: 1,
                },
            },
        }
    }
    render() {
        return (
            <div>
                <div className="banner_area">
                    <div className="container-fluid">
                        <Row>
                            <Col lg={2} sm={12}>
                                <CatagoryComponents />
                            </Col>
                            <Col lg={7} sm={12}>
                                <OwlCarousel 
                                    className="owl-theme baner_carosule_area" 
                                    loop 
                                    margin={10} 
                                    nav={false}
                                    dots={false}
                                    autoplay={true}
                                    autoplayTimeout={3000}
                                    responsive={this.state.responsive}
                                    >
                                    
                                        <div className="item">
                                            <Link to='/'>
                                                <div className="country_area">
                                                    <img className="bannerImg" src={Slider01} alt="images"></img>
                                                </div>
                                            </Link>
                                        </div>
                                    
                                        <div className="item">
                                            <Link to='/'>
                                                <div className="country_area">
                                                    <img className="bannerImg" src={Slider01} alt="images"></img>
                                                </div>
                                            </Link>
                                        </div>
                                    
                                        <div className="item">
                                            <Link to='/'>
                                                <div className="country_area">
                                                    <img className="bannerImg" src={Slider01} alt="images"></img>
                                                </div>
                                            </Link>
                                        </div>
                                    
                                </OwlCarousel>
                            </Col>
                            <Col lg={3} sm={12} className="baner_carosule_area">
                                <BannerRight />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;