import React from "react";
import Select from "react-select";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" }
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: "3rem",
    minHeight: "3rem",
    borderColor: state.isFocused ? "#0077ff" : provided.borderColor,
    boxShadow: state.isFocused ? "0 0 0 0.2rem rgba(0, 119, 255, 0.25)" : provided.boxShadow,
    backgroundColor: "transparent",
    "&:hover": {
      borderColor: state.isFocused ? "#0077ff" : provided.borderColor
    }
  })
};

const CustomSelect = ({ label, ...rest }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>{label}</label>
      <Select options={options} styles={customStyles} {...rest} />
    </div>
  );
};

export default CustomSelect;
