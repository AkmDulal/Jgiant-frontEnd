import React, { Component } from 'react';
// import { Tabs } from 'antd';
import OwlCarousel from 'react-owl-carousel';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import { Link } from "react-router-dom";

// import ProductImg from "../../images/producd/el_img1.jpg";
// Bootstrap
// import { Container, Row, Col } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
// Icon
import { HiPlus, HiEye, HiHeart } from "react-icons/hi";
class MegaProduct extends Component {

    constructor() {
        super()
        this.state = {
            responsive:{
                0: {
                    items: 1,
                },
                450: {
                    items: 2,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 4,
                },
            },
            NewArrival: [
                { "name": "Fruits & Vegetables", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img1.jpg"  },
                { "name": "Fresh Red Tomato", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img2.jpg"  },
                { "name": "Best ripe grapes", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img3.jpg"  },
                { "name": "Juice fresh orange", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img4.jpg"  },
                { "name": "Fruits & Vegetables", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img1.jpg"  },
            ]
        }
    }

    
    render() {
        
        return (
            <div>


            <Tabs>
                <TabList>
                    <h3>  Exclusive Products </h3>
                    <Tab>New Arrival</Tab>
                    <Tab>Best Sellers</Tab>
                    <Tab>Special Offer</Tab>
                </TabList>

                <TabPanel>
                    <OwlCarousel
                            className="owl-theme product__box"
                            loop
                            margin={10}
                            nav={false}
                            dots={true}
                            autoplay={true}
                            // autoplayTimeout={2000}
                            responsive={this.state.responsive}
                        >
                        
                        {this.state.NewArrival.map((NewArrival, i) =>
                            <div className="item" key={i}>
                                <Link to="/index">
                                    <div className="product_area">
                                        <div className="product_img">
                                            <img src={NewArrival.image} alt="product images"></img>
                                            <div className="thumb_action">
                                            <Link to="">  <HiPlus className="thumb_action_btn" />   </Link>
                                            <Link to="">  <HiEye className="thumb_action_btn" />   </Link>
                                            <Link to="/wishlis">  <HiHeart className="thumb_action_btn" />   </Link>
                                            </div>
                                            {/* <Button className="card__btn" >  Add To Card </Button> */}
                                        </div>
                                        <div className="product_middle">
                                            <h3>  {NewArrival.name} </h3>
                                            <div className="product_price">
                                                <span className="price">{NewArrival.price}</span>
                                                <del className="discount_price">{NewArrival.del}</del>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                    </OwlCarousel>
                </TabPanel>
                <TabPanel>
                    <OwlCarousel
                            className="owl-theme product__box"
                            loop
                            margin={10}
                            nav={false}
                            dots={true}
                            autoplay={true}
                            // autoplayTimeout={2000}
                            responsive={this.state.responsive}
                        >
                        
                        {this.state.NewArrival.map((NewArrival, i) =>
                            <div className="item" key={i}>
                                <Link to="/index">
                                    <div className="product_area">
                                        <div className="product_img">
                                            <img src={NewArrival.image} alt="product images"></img>
                                            <div className="thumb_action">
                                            <Link to="">  <HiPlus className="thumb_action_btn" />   </Link>
                                            <Link to="">  <HiEye className="thumb_action_btn" />   </Link>
                                            <Link to="/wishlis">  <HiHeart className="thumb_action_btn" />   </Link>
                                            </div>
                                            {/* <Button className="card__btn" >  Add To Card </Button> */}
                                        </div>
                                        <div className="product_middle">
                                            <h3>  {NewArrival.name} </h3>
                                            <div className="product_price">
                                                <span className="price">{NewArrival.price}</span>
                                                <del className="discount_price">{NewArrival.del}</del>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                    </OwlCarousel>
                </TabPanel>
                <TabPanel>
                    <OwlCarousel
                            className="owl-theme product__box"
                            loop
                            margin={10}
                            nav={false}
                            dots={true}
                            autoplay={true}
                            // autoplayTimeout={2000}
                            responsive={this.state.responsive}
                        >
                        
                        {this.state.NewArrival.map((NewArrival, i) =>
                            <div className="item" key={i}>
                                <Link to="/index">
                                    <div className="product_area">
                                        <div className="product_img">
                                            <img src={NewArrival.image} alt="product images"></img>
                                            <div className="thumb_action">
                                            <Link to="">  <HiPlus className="thumb_action_btn" />   </Link>
                                            <Link to="">  <HiEye className="thumb_action_btn" />   </Link>
                                            <Link to="/wishlis">  <HiHeart className="thumb_action_btn" />   </Link>
                                            </div>
                                            {/* <Button className="card__btn" >  Add To Card </Button> */}
                                        </div>
                                        <div className="product_middle">
                                            <h3>  {NewArrival.name} </h3>
                                            <div className="product_price">
                                                <span className="price">{NewArrival.price}</span>
                                                <del className="discount_price">{NewArrival.del}</del>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                    </OwlCarousel>
                </TabPanel>
            </Tabs>


      

            </div>
        );
    }
}

export default MegaProduct;

