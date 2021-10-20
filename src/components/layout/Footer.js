import React, { Component } from 'react';
import {  Row, Col } from 'react-bootstrap';

import Logo from "../../images/logo.png";
import { VscCallIncoming } from "react-icons/vsc";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";
import AppImg from "../../images/app.jpg";
import Payments from "../../images/payment.jpg" 
class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer_area"> 
                <div className="container-fluid">
                    <Row>
                        <Col lg={4} md={4}>
                            <div className="footer_logo">
                                <img src={Logo} alt="logo"></img>
                                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. </p>
                            </div>
                            <div className="caal_area">
                                <VscCallIncoming />
                                <div className="call_number">
                                    <h5> NeedHelp</h5>
                                    <p> (+800) 345 6789 </p>
                                    <p> (+800) 345 6789 </p>
                                </div>
                            </div>
                            <div className="social_icon">
                                <Link to="/"> <FaFacebookF />  </Link>
                                <Link to="/"> <FaYoutube />  </Link>
                                <Link to="/"> <FaTwitter />  </Link>
                                <Link to="/"> <FaLinkedinIn />  </Link>
                            </div>
                        </Col>
                        <Col lg={2} md={2}>
                            <div className="footer_link">
                                <h3> Information </h3>
                                <Link to="/"> Delivery  </Link>
                                <Link to="/"> About Us  </Link>
                                <Link to="/"> Secure Payment  </Link>
                                <Link to="/"> Contact Us  </Link>
                                <Link to="/"> Sitemap  </Link>
                                <Link to="/"> Stores  </Link>
                            </div>
                        </Col>
                        <Col lg={2} md={2}>
                            <div className="footer_link">
                                <h3> Custom Links </h3>
                                <Link to="/"> Legal Notice  </Link>
                                <Link to="/"> Prices Drop  </Link>
                                <Link to="/"> New Products  </Link>
                                <Link to="/"> Best Sales  </Link>
                                <Link to="/"> Login  </Link>
                                <Link to="/"> My Account  </Link>
                            </div>
                        </Col>
                        <Col lg={4} md={4}>
                            <div className="footer_link">
                                <h3> Newsletter </h3>
                                <p> Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                <form className="navbar-form search_from footer_search" role="search">
                                    <div className="input-group add-on">
                                    <input className="form-control" placeholder="Search to" name="srch-term" id="srch-term" type="text"></input>
                                    <div className="input-group-btn">
                                        <button className="btn-default custon_search_btn" type="submit"> <FaSearchLocation/> </button>
                                    </div>
                                    </div>
                                </form>
                                <img src={AppImg} alt="App Images"></img>
                            </div>
                        </Col>
                    </Row>
                </div>
                
                </footer>
                <div className="footer_bottom">
                    <p> Copyright @ JGIANT. All Rights Reserved </p>
                    <img src={Payments} alt="Payments"></img>
                </div>
            </div>
        );
    }
}

export default Footer;