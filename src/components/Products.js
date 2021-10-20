import React, { Component } from 'react';

import { Link } from "react-router-dom";
// Bootstrap
import {  Row, Col } from 'react-bootstrap';
import { HiPlus, HiEye, HiHeart } from "react-icons/hi";
import { VscStarFull, VscStarEmpty, VscStarHalf } from "react-icons/vsc";


class Products extends Component {
    constructor() {
        super()
        this.state = {
            NewArrival: [
                { "name": "Fruits & Vegetables", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img1.jpg"  },
                { "name": "Fresh Red Tomato", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img2.jpg"  },
                { "name": "Best ripe grapes", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img3.jpg"  },
                { "name": "Juice fresh orange", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img4.jpg"  },
                { "name": "Fruits & Vegetables", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img1.jpg"  },
                { "name": "Fruits & Vegetables", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img1.jpg"  },
                { "name": "Fresh Red Tomato", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img2.jpg"  },
                { "name": "Best ripe grapes", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img3.jpg"  },
                { "name": "Juice fresh orange", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img4.jpg"  },
                { "name": "Fruits & Vegetables", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img1.jpg"  },
                { "name": "Fruits & Vegetables", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img1.jpg"  },
                { "name": "Fresh Red Tomato", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img2.jpg"  },
                { "name": "Best ripe grapes", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img3.jpg"  },
                { "name": "Juice fresh orange", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img4.jpg"  },
                { "name": "Fruits & Vegetables", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img1.jpg"  },
                { "name": "Fruits & Vegetables", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img1.jpg"  },
                { "name": "Fresh Red Tomato", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img2.jpg"  },
                { "name": "Best ripe grapes", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img3.jpg"  },
                { "name": "Juice fresh orange", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img4.jpg"  },
                { "name": "Fruits & Vegetables", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img1.jpg"  },
                { "name": "Juice fresh orange", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img4.jpg"  },
                { "name": "Fruits & Vegetables", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img1.jpg"  },
                { "name": "Juice fresh orange", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img4.jpg"  },
                { "name": "Fruits & Vegetables", "price": "$55.00", "del": "$95.00", "image": process.env.PUBLIC_URL+"/images/producd/el_img1.jpg"  },
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="products_area">
                    <div className="container-fluid">
                        <Row>
                            <Col lg={12}>
                                <h3> Our Products</h3>
                                <p> Add bestselling products to weekly line up </p>
                            </Col>
                        </Row>
                        <div className="home_p_box">
                        <Row>
                            {this.state.NewArrival.map((NewArrival, i) =>
                                <Col lg={2} md={3} key={i} className="mg_btom">
                                    <Link to="/products-details">
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
                                                    <div className="review_start">
                                                        <VscStarFull />
                                                        <VscStarFull />
                                                        <VscStarFull />
                                                        <VscStarHalf />
                                                        <VscStarEmpty />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            )}
                        </Row>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;