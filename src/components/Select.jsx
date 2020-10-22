import React from "react";
import { Select } from "antd";

const { Option } = Select;

function SelectData({ placeholder, width, onChange, children }) {
  return (
    <div className="Selector">
      <Select
        showSearch
        style={{ width: width }}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {children}
      </Select>
    </div>
  );
}

export default SelectData;
