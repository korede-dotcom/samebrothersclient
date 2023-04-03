import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatepicker = ({ label, selected, onChange }) => {
  return (
    <div style={{ marginBottom: "1rem",background:'transparent', height:'10%' }}>
      <label>{label}</label>
      <DatePicker selected={selected} onChange={onChange} />
    </div>
  );
};

export default CustomDatepicker;
