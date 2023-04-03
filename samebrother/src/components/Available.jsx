import React from 'react'
import styled from 'styled-components'
import Booknow from '../reuseable/Booknow'
import '../index.css'
import livg from '../assets/livingroom.jpg'
import liv1 from '../assets/living1.jpg'
import liv2 from '../assets/living3.jpg'

function available() {
  const img = [
        {
            name: 'Deluxe Room',
            details: '1 bedroom, 40m',
            squ: <sup>2</sup>,
            bedtype: '1 Queen Bed',
            image: livg,
            id: 1
        },
        {
            name: 'Superior Suite Room',
            details: '1 bedroom, 40m',
            squ: <sup>2</sup>,
            bedtype: '1 king Bed',
            image: liv1,
            id: 2
        },
        {
            name: 'Deluxe Room',
            details: '1 bedroom, 40m',
            squ: <sup>2</sup>,
            bedtype: '1 Queen Bed',
            image: liv2,
            id: 3
        }
    ]
  
  return (
    <AvailableRooms>
        <pre>available rooms</pre>
        <div className="BooknowWrapper">
          {img.map(e => {
            const {name, details, bedtype, image, id} = e;
            return (
            <div  key={id}>
              <Booknow
                image={image}
                name={name}
                details={details}
                bedtype={bedtype}
              />
            </div>  
            )
          })}
        </div>
    </AvailableRooms>
  )
}
export default available

const AvailableRooms = styled.section`
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // border: 2px solid orange;
    padding: 5rem 0 0 0;
    // background: black;
    background: linear-gradient(to bottom, #383535 60%, white 40%);
    background-size: 50%;
    margin-bottom: 3rem;
    @media (max-width: 1214px) {
      background: none;
      // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }

    pre{
        color: white;
        
        text-transform: capitalize;
        font-size: 5vmin;
        // font-style: "crystalsky"; 
        text-align: start;
        padding-left: 2.5rem;
        margin: 0.5rem 0;
    }
    .BooknowWrapper{
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 1rem;
      row-gap: 1rem;
    }
 `
// const Headline = styled.pre`
// `;

// const BooknowWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     flex-wrap: wrap;
//     padding: 1rem;
//     row-gap: 1rem;
// `;

const Wrapper = styled.div`
  p, h1 {
    color: green;
  }
`;