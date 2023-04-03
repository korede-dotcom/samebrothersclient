// import {useState} from 'react'
// import {IoIosArrowDown} from 'react-icons/io'
// import styled from 'styled-components'
// import Select from '../reuseable/select'

// function Availabilities() {
//   const d = new Date().toString().slice(3, 16);

//   const [Arrival, setArrival] = useState(d)
//   const [Departure, setDeparture] = useState(d)
//   const [Guest, setGuest] = useState("2")
//   console.log(d);

//   return (
//     <Availability>
//       <div className="services">
//         <Select name="Arrival" date={Arrival} setDate={setArrival} />
//         <Select name="Departure"  date={Departure} setDate={setDeparture} primary= "1px solid white" />
//         <Select name="Guests"  date={Guest} setDate={setGuest} primary= "1px solid white" />
//       </div>
//       <div className="avail_container">
//           <h4>
//             <span>check availability</span>
//           </h4>
//       </div>
//     </Availability>
//   )
// }

// export default Availabilities;

// const Availability = styled.section`

//         display: flex;
//         align-items: center;
//         justify-content: center;
//         gap: 5rem;
//         flex-wrap: wrap;
//         row-gap: 1.5rem;
//         margin-bottom: 2rem;
//         color: white;

//         .services{
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-wrap: wrap;
//           gap: 2.5rem;
//           font-size: 20px;
//         }
// `;
