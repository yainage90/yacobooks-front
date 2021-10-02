import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const navs = [
  {
    title: "검색",
    link: "/search",
  },
];

const AppHeader = () => {
  return (
    <Header className="header" style={headerStyle}>
      <Menu
        theme="light"
        mode="horizontal"
        className="ant-menu"
        defaultSelectedKeys={["1"]}
        style={menuStyle}
      >
        {navs.map((nav, index) => (
          <Link key={index} to={nav.link}>
            <Menu.Item key={index} style={menuItemStyle}>
              {nav.title}
            </Menu.Item>
          </Link>
        ))}
      </Menu>
    </Header>
  );
};

const headerStyle = {
  background: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "5rem",
  position: "sticky",
  top: 0,
  zIndex: 2,
  width: "100%",
  boxShadow: "0px 1px 4px 1px grey",
};
const menuStyle = {
  width: "100%",
  justifyContent: "center",
  borderWidth: "0",
  fontSize: "20px",
  fontFamily: "notosans_bold",
};

const menuItemStyle = {
  color: "#333333",
};

export default AppHeader;
