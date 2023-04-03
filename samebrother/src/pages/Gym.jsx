import {useState} from 'react'
import { Link } from 'react-router-dom'
import Urlpage from '../components/Urlpage'
// Styles
import styles from '../styles/gym.module.css'
import styled from 'styled-components'
import '../index.css'
// 
import Booknow from '../reuseable/Booknow'
import '../index.css'
import Suite from '../components/Suite'
import Smallcomp from '../reuseable/smallcomp'
import Header from '../reuseable/Header'
import Select from '../reuseable/select'
// import {Button} from '../reuseable/smallcomp'

// Images
import Gymbackground from '../assets/gym.png'
import parlour from '../assets/training.png'
import im from '../assets/im.png'
import bedroom from '../assets/bedroom.png'
import glasscup from '../assets/glasscup.png'
import hotel from '../assets/hotel.png'
import flower from '../assets/flowers.png'
import training from '../assets/training.png'
import gym from '../assets/gym.png'


function Gym() {

  const d = new Date().toString().slice(3, 16);
  const [Arrival, setArrival] = useState(d)
  const [Departure, setDeparture] = useState(d)
  const [Guest, setGuest] = useState("2")

  const href = window.location.pathname;
    console.log(href.length)
    let location = '';
    if (href.length <= 2) {
        location = 'Home'
    }else{
         location = href.charAt(1).toUpperCase() + href.slice(2, 10);
        }

  const img = [
    {
        name: 'Deluxe Room',
        details: '1 bedroom, 40m',
        squ: <sup>2</sup>,
        bedtype: '1 Queen Bed',
        image: parlour,
        id: 1
    },
    {
        name: 'Superior Suite Room',
        details: '1 bedroom, 40m',
        squ: <sup>2</sup>,
        bedtype: '1 king Bed',
        image: im,
        id: 2
    },
    {
        name: 'Deluxe Room',
        details: '1 bedroom, 40m',
        squ: <sup>2</sup>,
        bedtype: '1 Queen Bed',
        image: bedroom,
        id: 3
    }
]

  return (
    <GymContainer>
      <Suite bgImage={gym}>
          <Header />
          <Availability>
            <div className="services">
              {/* <Select name="Arrival" date={Arrival} setDate={setArrival} />
              <Select name="Departure"  date={Departure} setDate={setDeparture} primary= "1px solid white" /> */}
              <Select name="Guests"  date={Guest} setDate={setGuest} />
            </div>
            <div className="avail_container">
              <h4>
                <span>check availability</span>
              </h4>
            </div>
          </Availability>
      </Suite>
          <pre style={{display: 'flex', alignItems: 'center',fontSize: '20px' ,gap: '.5rem', padding: '1.5rem 3rem'}}>
                <h4>Home</h4>
                <p style={{ color: 'rgb(102, 98, 98)'}}>/</p>
                <p style={{ color: 'rgb(102, 98, 98)'}}>{location}</p>
          </pre>
      <div className={styles.offer}>
          <pre>We Offer</pre>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus vel mi porttitor aliquet. Sed lacinia lobortis nisl, in aliquam diam bibendum id.</p>
          <p> <Link to="">Learn more</Link></p>
      </div>
      <div className="imageLink">
          <div className="backgroundImage">
            <p className="p1"><Link to="/home">Hotel</Link></p>
          </div>
          <div className="backgroundImage">
            <p className="p2"><Link to="/hall">Event Hall</Link></p>
          </div>
          <div className="backgroundImage">
            <p className="p3"><Link to="/gym">Gym</Link></p>
          </div>
      </div>
      <div className="room-suite">
        <pre>our Rooms &amp; Suites</pre>
        <p>Explore our various room designs, each one elegant and distinguished, just like our guests.</p>
      <Smallcomp  text="Explore more rooms"/>
      </div>
      {/* <Button text="coloring" /> */}
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
        <div className="event-hall">
          <div className="halltext">
            <pre>Our Event Hall</pre>
            <p>Quisque a dui lorem. In vel tempor felis. Fusce imperdiet, libero non dictum efficitur, neque neque placerat nisl, sit amet porttitor eros magna</p>
            <Smallcomp  text="Explore"/>
          </div>
          <div className="hallimg">
            <img src={glasscup} alt="" />
          </div>
        </div>
    </GymContainer>
  )
}

export default Gym


const GymContainer = styled.section`
    width: 100vw;
    .imageLink{
      margin: 3rem 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      row-gap: 1rem;
        .backgroundImage{
          height: 300px;
        margin: 0.5rem;
        width: 350px;
        }
        .p1{
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 100%;
          width: 100%;
          background-image: url(${hotel});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
           border-radius: 5px;
           opacity: 0.9;
          }
        .p2{
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 100%;
          width: 100%;
          background-image: url(${flower});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
           border-radius: 5px;
           opacity: 0.9;
          }
        .p3{
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 100%;
          width: 100%;
          background-image: url(${training});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
           border-radius: 5px;
          //  background:  rgb(112, 111, 111);
          //  backdrop-filter: blur(1000px); 
          // background-blend-mode: screen;
          backdrop-filter: blur(20px) saturate(120%) contrast(200%);
          opacity: 0.9;
          }
          a{
            color: white;
            font-size: 2rem;
            color: #FFFFFF;
            z-index: 1000px;
          }
    }
    .room-suite{
      margin: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: start;
      justify-content: center;
      pre{
        margin-bottom: 2.5vmin;
        // font-size: 2.5rem;
        font-size: calc(2vmin + 1rem);
        font-family: "Skyskraper"; 
      }
      p{
        max-width: 390px;
        letter-spacing: 0px;
        color: #535353;
        opacity: 1;
      }
    }
    .BooknowWrapper{
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 1rem;
      row-gap: 1rem;
    }
    .event-hall{
      margin: 15vmin 0 2rem 0;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 2rem;
      padding: 0 1rem;
      row-gap: 2rem;

      .halltext{
        display: flex;
        align-items: start;
        flex-direction: column;
        max-width: 350px;
        row-gap: 1rem;
        pre{
          font-size: 7vmin;
          text-transform: uppercase;
        }
        p{
          letter-spacing: 0px;
          color: #535353;
          opacity: 1;
          line-height: 1.5rem;
        }
      }
      .hallimg{
         img{
        width: 300px;
        height: 400px;
        border-radius: 5px;
      }
    }
    @media screen and (max-width: 500px){

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
        @media screen and (max-width: 620px) {
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