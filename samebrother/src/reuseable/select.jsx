import {useState} from 'react'
import styled from 'styled-components'
import {IoIosArrowDown} from 'react-icons/io'

function select(props) {
    // const [date, setDate] = useState({props.name})
    // console.log(date)
    // LET dateString = props.date.toString();
    const handleDateChange = (e) => {
        props.setDate(e.target.value);
      };
      
  return (
    <Select primary={props.primary}>
        <h4>{props.name}</h4>
        <h4>
            <span>{props.date}</span>
            <input name={props.name} value={props.date} onChange={handleDateChange} type="date" />
            <IoIosArrowDown />
        </h4>
    </Select>
  )
}

export default select;

const Select = styled.div`

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 0 .3rem 0 .7rem;
        // color: rgb(175, 163, 163);
        color: white;
        border-left: ${props => props.primary || ""};
        h4{
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
          font-weight: 400;
          font-size: 4vmin;
        }
        input{
            width: 30px !important;
            position: absolute;
            top: 5px;
            right: 0;
            z-index: 0;
            border: none;
            outline: none;
            background-color: transparent;
            opacity: 0;
            border: 2px solid red;
          }
          @media screen and (max-width: 900px){
              border: none;
          }
`;