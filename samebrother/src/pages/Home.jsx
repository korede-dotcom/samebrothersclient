import {useState} from 'react'
import Suite from '../components/Suite'
import urlpage from '../components/Urlpage'
import styles from '../styles/home.module.css'
import Urlpage from '../components/Urlpage'
import Available from '../components/Available'
import styled from 'styled-components'
import Header from '../reuseable/Header'
import Select from '../reuseable/select'
import Dropdown from '../reuseable/Dropdown'
import Hotel from '../assets/hotel.png'
import { PaystackButton,usePaystackPayment } from 'react-paystack'
 
function Home() {
  // const publicKey = process.env.pk;
  const d = new Date().toString().slice(3, 16);
  const [Arrival, setArrival] = useState(d);
  const [Departure, setDeparture] = useState(d);
  const [Guest, setGuest] = useState("2");
  // const publicKey = "pk_your_public_key_here"
  const amount = 1000000
  const [email, setEmail] = useState("koredebada@gmail.com")
  const [name, setName] = useState("korede")
  const [phone, setPhone] = useState("08089828929")
  const [selectedDate, setSelectedDate] = useState()

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey:'pk_test_5ca2ce7d8141dfde32f19b2807d9794dc1285f76',
    text: "Pay Now",
    redirecturl:'google.com',
    onSuccess: (e) =>
    console.log(e),
    onClose: () => alert("Wait! Don't leave :("),
  }

     const handleDateChange = date => {
      setSelectedDate(date);
    };

  return (
    <div class={styles.Home_Container}>
        <Suite bgImage={Hotel} >
            <Header/>
            <Availability>
              <Dropdown handleDateChange={handleDateChange} selectedDate={selectedDate}/>
              {/* <div className="services">
                <Select name="Arrival" date={Arrival} setDate={setArrival} />
                <Select name="Departure"  date={Departure} setDate={setDeparture} primary= "1px solid white" />
                <Select name="Guests"  date={Guest} setDate={setGuest} primary= "1px solid white" />
              </div> */}
              {/* <div className="avail_container"> */}
                {/* <h4>
                  <span>check availability</span> */}
                  <PaystackButton {...componentProps} className="avail_container"/>

                {/* </h4> */}
              {/* </div> */}
            </Availability>
        </Suite>
        <Urlpage />
        <Available />
    </div>
  )
}
export default Home;


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
            /* flex-direction: column; */
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
            color: white;
            padding: 10px;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
             cursor: 'pointer';
          }
`;