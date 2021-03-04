import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import LeftMenu from './leftmenu.component'
import RightMenu from './rightmenu.component'
import { Drawer, Button } from 'antd';

const { Header, Content, Footer } = Layout;

export default class Navbar extends Component {
  state = {
    current: 'mail',
    visible: false
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

  render() {
    return (
      <div>
        <nav className="menuBar">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/78/SingHealth_Logo.png"
              className="img-partners"
              alt="SingHealth"
            />
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <div className="rightMenu">
              <RightMenu />
            </div>
            <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
              <span className="barsBtn"></span>
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <LeftMenu />
              <RightMenu />
            </Drawer>
          </div>
        </nav>
        {/* <Layout className="layout">
          <Menu className="buttons" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item className="name" key="1">Audits
              <li className="navbar-item">
                <Link to="/" className="nav-link" />
              </li>
            </Menu.Item>
            <Menu.Item key="2">Create Audit
              <li className="navbar-item">
                <Link to="/checklist" className="nav-link" />
              </li>
            </Menu.Item>
            <Menu.Item key="3">Directory
              <li className="navbar-item">
                <Link to="/directory" className="nav-link" />
              </li>
            </Menu.Item>
          </Menu>
        </Layout> */}
      </div>
    );
  }
}