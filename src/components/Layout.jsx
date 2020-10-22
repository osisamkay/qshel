import React from "react";
import { Layout, Menu } from "antd";
import PropTypes from "prop-types";
import { Nav } from "./Nav";
import "../Styles/Layout.scss";
// import { Footer } from "./Footer";

// const { Header, Content, Footer } = Layout;

export const LayoutLayer = ({ children, colour }) => {
  return (
    <Layout>
      <Nav type={colour} />
      <div className="children">{children}</div>
      {/* <Footer /> */}
    </Layout>
  );
};

LayoutLayer.propTypes = {
  children: PropTypes.node.isRequired,
};
