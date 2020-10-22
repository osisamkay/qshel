import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button, Drawer } from "antd";
import "../Styles/Nav.scss";
import { ReactComponent as Logo } from "../Assets/Logo1.svg";
import { ReactComponent as Logo2 } from "../Assets/Logo2.svg";
// import logo from "../Assets/logo.png";
import { ReactComponent as HomeMenu } from "../Assets/menu.svg";
import { ReactComponent as HomeMenuClose } from "../Assets/Close.svg";
const { Header, Content, Footer } = Layout;

export const Nav = ({ type }) => {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState("1");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(type);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="nav">
      <div className="headerMenu">
        <div className="mobileTop">
          <div className="toplogo">
            {type === "black" ? <Logo2 /> : <Logo />}
          </div>

          <div
            onClick={() => {
              showDrawer();
            }}
          >
            <HomeMenu />
          </div>
        </div>
        <div className="leftNavside">
          <Link to="/">{type === "black" ? <Logo2 /> : <Logo />}</Link>
        </div>

        <Menu
          onClick={({ key }) => {
            setKey(key);
          }}
          className="menus"
          mode="horizontal"
          // defaultSelectedKeys={[`${key}`]}
        >
          <Menu.Item className="first" key="1">
            <Link
              style={
                type === "black" ? { color: "inherit" } : { color: "#fff" }
              }
              to="/"
            >
              Buy
            </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link
              style={
                type === "black" ? { color: "inherit" } : { color: "#fff" }
              }
              to="/career"
            >
              Rent
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link
              style={
                type === "black" ? { color: "inherit" } : { color: "#fff" }
              }
              to="/about"
            >
              Financing
            </Link>
          </Menu.Item>

          <div
            style={{
              color: "inherit",
              borderRight: "1px solid #A6A6A6",
              marginTop: "7px",
            }}
          />

          <Menu.Item key="5">
            <Link
              style={
                type === "black" ? { color: "inherit" } : { color: "#fff" }
              }
              to="/login"
            >
              Log In
            </Link>
          </Menu.Item>
          <Menu.Item className="last" key="6">
            <Button className="signUp">
              <Link style={{ color: "inherit" }} to="/contact">
                Create a free account
              </Link>
            </Button>
          </Menu.Item>
        </Menu>
      </div>
      <Drawer
        title={
          <div>
            <div className="mobileTop2">
              <div className="toplogo">
                <Logo2 />
              </div>

              <div
                onClick={() => {
                  onClose();
                }}
              >
                <HomeMenuClose />
              </div>
            </div>
          </div>
        }
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        className="menuDrawer"
      >
        <Link to="/">Home</Link>
        <Link to="/career">Buy</Link>
        <Link to="/contact">Rent</Link>
        <Link to="/about">Financing</Link>
      </Drawer>
    </div>
  );
};
