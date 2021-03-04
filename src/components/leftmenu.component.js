import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class LeftMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="mail">Audits
                    <li className="navbar-item">
                        <Link to="/" />
                    </li>
                </Menu.Item>
                <Menu.Item key="create">Create Audit
                    <li className="navbar-item">
                        <Link to="/checklist" />
                    </li>
                </Menu.Item>
                <Menu.Item key="alipay">Directory
                    <li className="navbar-item">
                        <Link to="/directory" />
                    </li>
                </Menu.Item>
            </Menu >
        );
    }
}
export default LeftMenu;