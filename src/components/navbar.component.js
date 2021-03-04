import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export default class Navbar extends Component {

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
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
        </Header>
      </Layout>
    );
  }
}