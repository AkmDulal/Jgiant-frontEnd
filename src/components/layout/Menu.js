import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Drawer, Button} from 'antd';
// Bootstrap
import { Row, Col } from 'react-bootstrap';

import { VscListSelection, VscChevronDown } from "react-icons/vsc";

class Menu extends Component {
    constructor(props){
        super(props)
        this.state={
            visible: false, 
            placement: 'left'
        }
    }
       // Menu Scrolled 
       componentDidMount(){
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if(isTop !== true){
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled: false })
            }
        });
    }

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
        this.setState({
          visible: false,
        });
      };
  
    onChange = e => {
      this.setState({
        placement: e.target.value,
      });
    };

    render() {
        const { placement, visible } = this.state;
        return (
            <div className={this.state.scrolled ? ' scrolled' : ''}>
                <div className="menu_area">
                    <div className="container-fluid">
                        <Row>
                            <Col lg={2} md={3}>
                                <div onClick={this.showDrawer} className="caragory_rasponsive">
                                    <VscListSelection />
                                    <h1> Categories  </h1>
                                    <VscChevronDown />
                                </div>
                            </Col>
                            <Col lg={6} md={6}>
                                <div className="caragory_rasponsive_menu">
                                    <Link to="/">
                                        All Shop
                                    </Link>
                                    <Link to="/">
                                        Today's Deails 
                                    </Link>
                                    <Link to="/">
                                        Customer Service
                                    </Link>
                                    <Link to="/">
                                        Sell
                                    </Link>
                                    <Link to="/">
                                        Registry
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={3} md={3}>
                                <div className="caragory_rasponsive_menu caragory_rasponsive_menu_right">
                                    <Link to="/">
                                        News Feed
                                    </Link>
                                    <Link to="/">
                                        Help
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                        <Drawer
                            title="Basic Drawer"
                            placement={placement}
                            closable={false}
                            onClose={this.onClose}
                            visible={visible}
                            key={placement}
                            >
                                <Button onClick={this.onClose}>
                                    Cancel
                                </Button>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;