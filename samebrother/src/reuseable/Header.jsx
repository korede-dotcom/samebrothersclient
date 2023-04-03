import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
// import styles from '../styles/header.module.css'
import { SlMenu } from "react-icons/sl"
import styled from 'styled-components'

function header(props) {
    console.log("🚀 ~ file: Header.jsx:8 ~ header ~ props:", props)
    // const [click, setClick] = useState(false)
    const [Navbar, setNavbar] = useState(false)

    const changeScroll = () => {
        if (window.scrollY >= '20') {
             setNavbar(true)
        }else{
            setNavbar(false)
        }
     }
     window.addEventListener('scroll', changeScroll)

     const [isScrolled, setIsScrolled] = useState(false);
     function handleScroll() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }

      const handleToggle = () => {
        const nav = document.querySelector(".mobilenav")
        nav.classList.toggle("active")
      }


  return (
         <Header> 
            <div 
                className={`headerWrapper ${Navbar ? 'active' : ''} `} >
            <div className="logo">
                <sup>Mus</sup><sub>ers</sub>
            </div>
            <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/event">Event Hall</Link>
                    <Link to="/gym">Gym</Link>
                    <Link to="/about">About</Link>
                    <Link to="/gallery">Gallery</Link>
            </div>
            <div className="menu">
                <div className="menuIcon" onClick={handleToggle}>
                    <SlMenu style={{width: '30px', height: '30px'}} />
                </div>
                    <div className='mobilenav'>
                    <Link to="/">Home</Link>
                    <Link to="/event">Event Hall</Link>
                    <Link to="/gym">Gym</Link>
                    <Link to="/about">About</Link>
                    <Link to="/gallery">Gallery</Link>

                    </div>
                <div className="booking">
                    <h3>Book Now</h3>
                </div>
            </div>
            </div>
      </Header>
  )
}

export default header;
/* font-family: "Laniesky"; */
// font-family: "font 6"; 

const Header = styled.header`
        // height: 50px;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        position: relative;
      
        
        .headerWrapper{
            height: 100px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 999;
            // background-color: #333;
            /* background-color:${props => props.primary} !important; */
            padding: 20px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
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
            position: relative;
            @media screen and (max-width: 40em) {
                position: relative;

            }
            .menuIcon{
                display: none !important;
                @media screen and (max-width: 40em) {
                    display: initial !important;
                }
            }

           
                .mobilenav{
                    display: none;
                    @media screen and (max-width: 40em) {
                        display: block;
                        top: 60px;
                        position: absolute;
                        height: 80vh;
                        width: 50vw;
                        transition: transform 0.3s ease-in-out, background 0.3s ease-in-out, text-align 0.3s ease-in-out;
                       transform: translateX(500px);
                        background: rgb(51, 51, 51);

                      
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        justify-content: space-around;

                      
                        
                    }
                   
                }
                .active{
                    transform: translateX(0px);
                }
            
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
