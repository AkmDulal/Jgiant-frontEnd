import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";
import Add01 from "../images/slider/banneradd01.jpg";
import Add02 from "../images/slider/banneradd02.jpg";
import Add03 from "../images/slider/banneradd03.jpg";


class BannerRight extends Component {
    constructor(props){
        super(props);
        this.state= {
            usersList: [],
            loading: '',
            users: [],
            error:[],
            recentLink:[],
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
                <div className="banner_add_one">
                    <OwlCarousel 
                        className="owl-theme " 
                        loop 
                        margin={10} 
                        nav={false}
                        dots={true}
                        autoplay={true}
                        autoplayTimeout={2000}
                        responsive={this.state.responsive}
                        >
                        <div className="sale-banner mb-3 mb-md-4">
                            <Link to='/' className="banner_add_area hover_effect1"> 
                                <img src={Add01} alt="images"></img>
                            </Link>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="banner_add_one">
                    <OwlCarousel 
                        className="owl-theme " 
                        loop 
                        margin={10} 
                        nav={false}
                        dots={true}
                        autoplay={true}
                        autoplayTimeout={2000}
                        responsive={this.state.responsive}
                        >
                            <div className="sale-banner mb-3 mb-md-4">
                                <Link to='/' className="banner_add_area hover_effect1"> 
                                <img src={Add02} alt="images"></img>
                                </Link>
                            </div>
                    </OwlCarousel>
                </div>
                <div className="banner_add_one">
                    <OwlCarousel 
                        className="owl-theme " 
                        loop 
                        margin={10} 
                        nav={false}
                        dots={true}
                        autoplay={true}
                        autoplayTimeout={2000}
                        responsive={this.state.responsive}
                        >
                            <div className="sale-banner mb-3 mb-md-4">
                                <Link to='/' className="banner_add_area hover_effect1"> 
                                <img src={Add03} alt="images"></img>
                                </Link>
                            </div>
                    </OwlCarousel>
                </div>
            </div>
        );
    }
}

export default BannerRight;