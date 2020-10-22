import React from "react";
import { LayoutLayer } from "../../components/Layout";
import "../../Styles/Home.scss";
import { Select } from "antd";
import { Button } from "antd";
import SelectData from "../../components/Select";

const { Option } = Select;

const Home = () => {
  function onChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <LayoutLayer colour="transparent">
      <div className="container">
        <div className="group">
          <div className="header">
            <div className="heading">Home has never been more easy to find</div>
            <div className="subHeading">
              Search from over 1,200 homes you can own or rent with ease and
              flexible payment
            </div>
            <div className="filterContainer">
              <div className="filterGroup">
                <div className="select">
                  <SelectData
                    width="131px"
                    placeholder="Buy"
                    onChange={onChange}
                  >
                    {options.map((data) => {
                      return <Option value={data.code}>{data.name}</Option>;
                    })}
                  </SelectData>
                  <SelectData
                    width="201px"
                    placeholder="Apartment type"
                    onChange={onChange}
                  >
                    {options2.map((data) => {
                      return <Option value={data.name}>{data.name}</Option>;
                    })}
                  </SelectData>
                  <SelectData
                    width="174px"
                    placeholder="Location"
                    onChange={onChange}
                  >
                    {options3.map((data) => {
                      return <Option value={data.name}>{data.name}</Option>;
                    })}
                  </SelectData>
                  <Button className="heroBtn" type="primary" loading={false}>
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutLayer>
  );
};

export default Home;

const options = [
  {
    name: "Buy",
    code: "NY",
    details: "Buy properties with a flexible payment plan",
  },
  {
    name: "Rent",
    code: "RM",
    details: "Rent properties with a flexible payment plan",
  },
  {
    name: "Rent to Own",
    code: "LDN",
    details: "Rent properties and own them after a period of time",
  },
  ,
];
const options2 = [
  {
    name: "Bungalows",
  },
  {
    name: "Flats",
  },
  {
    name: "Duplexs & Mansions",
  },
  {
    name: "Terraces",
  },
  {
    name: "Detached & Semi-Detached",
  },
  ,
];
const options3 = [
  {
    name: "Lekki 1",
  },
  {
    name: "Lekki 2",
  },
  {
    name: "Magodo",
  },
  {
    name: "Lakowe",
  },
  {
    name: "Ajah",
  },
  ,
];
