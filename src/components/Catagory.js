import React, { Component } from 'react';

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";


const { SubMenu } = Menu;  


class Catagory extends Component {

    state = {
        visible: false,
      };
    
      handleMenuClick = e => {
        if (e.key === '3') {
          this.setState({ visible: false });
        }
      };
    
      handleVisibleChange = flag => {
        this.setState({ visible: flag });
      };


    render() {
        return (
            <div>
                <div className="menu__vartical_menu">
                    <Menu className="menu__vartical_menu_list" mode="vertical">
                    {/* catagores */}
                            {/* <Link to="/catagores"> */}
                                <SubMenu key="sub1" icon={<MailOutlined />} title="Electronics">
                                    <Menu.ItemGroup>
                                        <Menu.Item key="1"><Link to="/catagores">Option 1 </Link></Menu.Item>
                                        <Menu.Item key="2"><Link to="/catagores">Option 1 </Link></Menu.Item>
                                        <Menu.Item key="3"><Link to="/catagores">Option 1 </Link></Menu.Item>
                                        <Menu.Item key="4"><Link to="/catagores">Option 1 </Link></Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                            {/* </Link> */}
                            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Toiletries">
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub4" icon={<SettingOutlined />} title="Food">
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub5" icon={<SettingOutlined />} title="Grocery">
                                <Menu.Item key="13">Option 9</Menu.Item>
                                <Menu.Item key="14">Option 10</Menu.Item>
                                <Menu.Item key="15">Option 11</Menu.Item>
                                <Menu.Item key="16">Option 12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub6" icon={<SettingOutlined />} title="Life Style">
                                <Menu.Item key="17">Option 9</Menu.Item>
                                <Menu.Item key="18">Option 10</Menu.Item>
                                <Menu.Item key="19">Option 11</Menu.Item>
                                <Menu.Item key="20">Option 12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub7" icon={<SettingOutlined />} title="Health & Wealth">
                                <Menu.Item key="21">Option 9</Menu.Item>
                                <Menu.Item key="22">Option 10</Menu.Item>
                                <Menu.Item key="23">Option 11</Menu.Item>
                                <Menu.Item key="24">Option 12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub8" icon={<SettingOutlined />} title="Home Appliances">
                                <Menu.Item key="25">Option 9</Menu.Item>
                                <Menu.Item key="26">Option 10</Menu.Item>
                                <Menu.Item key="27">Option 11</Menu.Item>
                                <Menu.Item key="28">Option 12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub9" icon={<SettingOutlined />} title="Beauty Care">
                                <Menu.Item key="29">Option 9</Menu.Item>
                                <Menu.Item key="30">Option 10</Menu.Item>
                                <Menu.Item key="31">Option 11</Menu.Item>
                                <Menu.Item key="32">Option 12</Menu.Item>
                            </SubMenu>
                            <div className="all_c_btn">
                                <Link to='/'>
                                    <p className="all_cata"> <Link to="/catagores">View All Categories </Link>  </p>
                                </Link>
                            </div>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default Catagory;