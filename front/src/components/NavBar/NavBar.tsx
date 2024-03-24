import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useNavigate } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "option", <PieChartOutlined />),
  getItem("Products", "productos", <DesktopOutlined />),
  getItem("Ventas", "ventas", <UserOutlined />, [
    getItem("Caja", "ventas/caja"),
    getItem("estadisticas", "ventas/estadisticas"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const handleMenuClick = (props: MenuInfo) => {
        console.log(props);
        navigate(`/${props.key}`);
        
      
    };
    

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
        items={items}
                  onClick={(props) => handleMenuClick(props)}
        />
      </Sider>
    </Layout>
  );
};

export default NavBar;
