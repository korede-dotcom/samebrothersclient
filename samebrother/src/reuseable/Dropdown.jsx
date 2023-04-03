import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classnames from 'classnames';
import styled from 'styled-components';

const MyDatePicker = ({handleDateChange,selectedDate}) => {
    // const [selectedDate, setSelectedDate] = useState(null);
  
    // const handleDateChange = date => {
    //   setSelectedDate(date);
    // };
  
    return (
        <DateWrapper>
      <div className="date-picker-wrapper">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Select a date"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={8}
          dateFormat="dd MMMM yyyy"
          className={classnames('date-picker', { 'is-selected': selectedDate })}
        />
        <div className="date-picker-background" />
      </div>

        </DateWrapper>
    );
  };

  const DateWrapper = styled.div`
    
    .date-picker-wrapper {
  position: relative;
  width: 150px;
  margin: 0 auto;
  color: #000;

  .date-picker {
    width: 100%;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
    background-color:transparent;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    color:white;

    &.is-selected {
      background-color: transparent;
      box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
      color:white;
    }
  }

  .date-picker-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.7;
    background-image: url('https://picsum.photos/id/1000/800/600');
    background-size: cover;
    filter: blur(10px);
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.4;
    }
  }
}




  `






  export default MyDatePicker