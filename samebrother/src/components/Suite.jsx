import {React, useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { SlMenu } from "react-icons/sl"
import Header from '../reuseable/Header'
// import Availability from '../reuseable/Availabilities.jsx'
import Lvingroom from '../assets/living1.jpg'
import gym from '../assets/gym.png'
import styled from 'styled-components'
import Select from '../reuseable/select'

function suite(props) {
  const [click, setClick] = useState(false)
    const [Navbar, setNavbar] = useState(false)

 

    const changeScroll = () => {
        if (window.scrollY >= '450') {
             setNavbar(true)
             
        }else{
            setNavbar(false)
        }
     }
     window.addEventListener('scroll', changeScroll)

  return (
    
    <Suite bgImage={props.bgImage} >
      {props.children}
    </Suite>
  )
}

export default suite;


const Suite = styled.section`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 90vh;
      width: 100%;
      /* padding: 2rem 0 3rem 0; */
      background-image: url(${props => props.bgImage});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      color: white;
      padding: 0 2rem;
      background-attachment: fixed;
      transition: background-image 1s ease-in-out;

      @keyframes fade {
  0% {
    background-image: url(image1.jpg);
  }
  50% {
    background-image: url(image2.jpg);
  }
  100% {
    background-image: url(image3.jpg);
  }
}

      // Header
      .headerWrapper{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        top: 0;
        left: 0;
        color: #fff;
        padding: 0 3rem;
        z-index: 999;
        font-family: 'Lato', sans-serif; 
     }
    .active{
         row-gap: 1rem;
         background-color: #333;
    }
        
        .logo {
        font-family: "Skyskraper"; 
        font-size: 7vmin;
        @media screen and (max-width: 900px){

            }
    }

    .navbar{
        display: flex;
        align-items: center;
        /* gap: 1.5rem; */
        gap: 2rem;
        flex-wrap: wrap;

        @media screen and (max-width: 900px){
            display: none;
        }
    }
    .navbar a{
        font-size: 27px;
        color: white;
        font-weight: 600;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
    .menu{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .booking{
        border: 2px solid white;
        padding: .7rem 1.5rem;
        min-width: 150px;
    }
    .navbarfull{
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 980px){
        .navbar{
            display: none;
        }
    }
    @media screen and (max-width: 610px){
        .booking{
            display: none;
    
        }
    }
`;
const Availability = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5rem;
        flex-wrap: wrap;
        row-gap: 1.5rem;
        margin-bottom: 2rem;
        color: white;
        @media screen and (max-width: 640px) {
          display: flex;
            flex-direction: column;
            align-items: center;
        }
        .services{
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2.5rem;
          font-size: 20px;
          @media screen and (max-width: 620px){
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
          .avail_container{
            border: 1px solid white;
            padding: 1rem;
            border-radius: 4px;
          }
`;

// const Head = styled.div`
//     border: 3px dashed red;
//     position: absolute;
//     top: 0;
//     width: 100%;
//     height: 100px;
// `;

// const Availability = styled.section`
//         position: absolute;
//         width: 100%;
//         top:80%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         gap: 5rem;
//         flex-wrap: wrap;
//         row-gap: 1.5rem;
//         margin-bottom: 2rem;
//         color: white;
//         @media screen and (max-width: 640px) {
//           display: flex;
//             flex-direction: column;
//             align-items: center;
//         }
// `;

// const Availability = styled.section`
// position: absolute;
// top 80%;
// left: auto;
// display: flex;
// align-items: center;
// justify-content: center;
// gap: 5rem;
// flex-wrap: wrap;
// row-gap: 1.5rem;
// margin-bottom: 2rem;
// color: white;
// @media screen and (max-width: 640px) {
//   display: flex;
//     flex-direction: column;
//     align-items: center;
// }

// .services{
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 2.5rem;
//   font-size: 20px;
//   @media screen and (max-width: 620px){
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// }
//   .avail_container{
//     border: 1px solid white;
//     padding: 1rem;
//     border-radius: 4px;
//   }
// `;
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
