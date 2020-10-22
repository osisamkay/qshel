import { Layout } from "antd";
import React from "react";
import InputData from "../../../components/InputData";
import { LayoutLayer } from "../../../components/Layout";
import "../../../Styles/Login.scss";

const Login = () => {
  return (
    <LayoutLayer colour="black">
      <div className="Container">
        <div className="group">
          <div className="left">
            <div className="welcome">Welcome Back ...</div>
          </div>
          <div className="right">
            <div className="rightGroup">
              <InputData />
            </div>
          </div>
        </div>
      </div>
    </LayoutLayer>
  );
};

export default Login;
