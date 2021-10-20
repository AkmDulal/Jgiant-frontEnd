import React, { Component } from 'react';
import { BiX } from "react-icons/bi";
// Components
import Cart from "../../components/Card"


import { VscCallOutgoing, VscOutput } from "react-icons/vsc";
// Bootstrap
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


import { FaSearchLocation } from "react-icons/fa";
import { BiUser, BiHeart  } from "react-icons/bi";

import TopBanner from "../../images/header_top.jpg";
import Logo from "../../images/logo.png";
class Hedaer extends Component {

    constructor(props){
        super(props)
        this.state={
            showMe:true
        }
    }
    operation(){
        this.setState({
            showMe: false
        })
    }
 

    render() {
        return (
            <div>
                {
                    this.state.showMe?
                    <div className="top_banner_area">
                            <h2 onClick={()=>this.operation()}>  <BiX /> </h2>
                            <img className="top_header_Banner" src={TopBanner} alt="Top Banner"></img>
                    </div>
                    :null
                }
                <div className="top_banner_bottom">
                    <div className="container-fluid">
                        <div className="top_banner_left">
                            <p> <VscCallOutgoing /> 123-456-789 </p>
                            <p> <VscCallOutgoing /> support@jgiant.com </p>
                        </div>
                        <div className="top_banner_right">
                            <p> <VscOutput /> support@jgiant.com </p>
                        </div>
                    </div>
                </div>
                <div className="logo_card_area">
                    <div className="container-fluid">
                        <Row>
                            <Col lg={2} md={3} sm={6}>
                                <Link to="/">
                                    <img src={Logo} alt="logo"></img>
                                </Link>
                            </Col>
                            <Col lg={8} md={6} sm={6}>
                                <form className="navbar-form search_from" role="search">
                                    <div className="input-group add-on">
                                    <input className="form-control" placeholder="Search to" name="srch-term" id="srch-term" type="text"></input>
                                    <div className="input-group-btn">
                                        <button className="btn-default custon_search_btn" type="submit"> <FaSearchLocation/> </button>
                                    </div>
                                    </div>
                                </form>
                            </Col>
                            <Col lg={2} md={3}>
                                <div className="vandor_header_right">
                                    <Link to="/login-from" className="vandor_header_right_icon">
                                        <BiUser />
                                    </Link>
                                    <Link to="/wishlis" className="vandor_header_right_icon"> 
                                        <BiHeart />
                                        <span className="vandor_right_number">0</span>
                                    </Link>
                                    <Cart />
                                    
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hedaer;