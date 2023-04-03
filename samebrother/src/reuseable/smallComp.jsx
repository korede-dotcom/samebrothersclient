import React from 'react'
import styles from '../styles/smallcomp.module.css'
import styled from 'styled-components'
import {HiOutlineArrowSmRight} from 'react-icons/hi'

function Smallcomp(props) {
  return (
    <Book bgColor={props.bgColor} color={props.color}>
        <p>{props.text}</p>
        <HiOutlineArrowSmRight />
    </Book>
  )
}

// export function Button(props) {
//     return (
//       <div className={styles.botton}>
//           <h1 >{props.text}</h1>
//       </div>
//     )
//   }

export default Smallcomp

const Book = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: max-content;
padding: 1rem ;
gap: 10px;
margin-top: 1.5rem;
border: 1px solid black;
background-color: ${props => props.bgColor};
color: ${props => props.color};
//  border-left: ${props => props.primary || ""};
opacity: 1;
`;