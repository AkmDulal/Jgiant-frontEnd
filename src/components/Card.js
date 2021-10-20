import React, { Component } from 'react';
import { BiCartAlt  } from "react-icons/bi";
import { Drawer, Button} from 'antd';

class Card extends Component {
    state = { visible: false, placement: 'right' };

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
                <div>
                  <div className=" vandor_header_right_icon" >
                    <div onClick={this.showDrawer}>
                        <div className="vandor_header_right_icon">
                            <BiCartAlt />
                            <span className="vandor_right_number">0</span>
                        </div>
                        $159.00
                    </div>
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
                
        );
    }
}

export default Card;