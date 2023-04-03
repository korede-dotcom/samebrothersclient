import {React,useState,useEffect} from 'react'
import Suite from '../components/Suite'
import styled from 'styled-components'
import Urlpage from '../components/Urlpage'
import Arrowlink from '../reuseable/smallComp.jsx'
import Header from '../reuseable/Header'
// import Select from '../reuseable/select'
import Hall1 from '../assets/hall1.png'
import Hall2 from '../assets/hall2.png'
import Hall3 from '../assets/hall3.png'
import Hall4 from '../assets/hall4.png'
import Hall5 from '../assets/hall5.png'
import Glasscup from '../assets/glasscup.png'
import Flowers from '../assets/flowers.png'
import { black } from 'color-name'
import CustomSelect from "../reuseable/CustomSelect"
import CustomDatepicker from "../reuseable/CustomDatepicker"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReusableModal from '../reuseable/ReuseableModal'
import { BASE_URL } from '../config/config';
import { PaystackButton,usePaystackPayment } from 'react-paystack'

function Event() {
  const d = new Date().toString().slice(3, 16);
  const [Arrival, setArrival] = useState(d)
  const [Departure, setDeparture] = useState(d)
  const [Guest, setGuest] = useState("2")
  const [isavailable,setisavailable] = useState(false)
  const [age, setAge] = useState('');
  const [select, setselect] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [branch, setBranch] = useState([]);
  const [currentbranch, setCurrentBranch] = useState([]);
  const [amount, setAmount] = useState();

const images = [Flowers, Glasscup,Hall1,Hall2,Hall3,Hall4];

const fecthBranch = async () => {
  const response = await fetch(`${BASE_URL}branch/active`)
  const data = await response.json()
  setBranch(data?.data?.active)

}

const fecthEventConfig = async (currentbranch) => {
  const response = await fetch(`${BASE_URL}eventmanager/active/pkg?branchid=${currentbranch && currentbranch}`)
  const data = await response.json()
  setCurrentBranch(data?.data?.pkgs)

}
  useEffect(() => {
     fecthBranch()
  },[])


  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);

  }, []);

  const href = window.location.pathname;
  let location = '';
  if (href.length <= 2) {
      location = 'Home'
  }else{
       location = href.charAt(1).toUpperCase() + href.slice(2, 10);
      }

 

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setisavailable(!isavailable)
    setselect('')

  fecthBranch()
  };
 
  const handleChange = (e) => {
    const { value, name } = e.target
   const r = branch?.find(e => {
     return e?.name.toString() === value
    })
   setselect({
    branch:value
   })
   localStorage.setItem('branchid',JSON.stringify(r))
     
 }
  const handleChangeDate = (e) => {
    const { value, name } = e.target
   setselect((prev) => {
    return {
      ...prev,
      date:value
    }
   })
     
 }

  const handleEventType = (e) => {
    const { value, name } = e.target
    const r = currentbranch?.find(e => {
      return e?.event_type.toString() === value
     })
     setAmount(r)     
 }

  const check = () => {
    setisavailable(true)
    
    fecthEventConfig(JSON.parse(localStorage.getItem('branchid'))._id)
    toast.error('Sorry Date not available', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const [email, setEmail] = useState("korede@gmail.com")
  const [name, setName] = useState("korede")
  const [phone, setPhone] = useState("08089828929")


  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };
  const config = {
    reference: (new Date()).getTime().toString(),
    metadata: {
          name,
          phone,
        },
    email: "user@example.com",
    amount: `${parseInt(amount?.price)}00`, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_5ca2ce7d8141dfde32f19b2807d9794dc1285f76',
};

const initializePayment = usePaystackPayment(config);

 // you can call this function anything
 const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
  toast.success(`You,ve secure the venue here is your reference ${reference.reference}`, {
    position: "top-center",
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}
  // const componentProps = {
    
  //   email,
  //   amount:2000,
  //   metadata: {
  //     name,
  //     phone,
  //   },
  //   publicKey:'pk_test_5ca2ce7d8141dfde32f19b2807d9794dc1285f76',
  //   text: "continue to payment",
  //   redirecturl:'google.com',
  //   onSuccess: (e) =>
  //   console.log(e),
  //   onClose: () => alert("Wait! Don't leave :("),
    
  // }



  

  return (
    <Eventwrapper>
      <Suite  bgImage={images[index]}>
          <Header />
          <Availability>
            <div className="services">
            {/* <CustomSelect label="Select an option" value={selectedOption} onChange={handleOptionChange} />
            <CustomDatepicker label="Select a date" selected={selectedDate} onChange={handleDateChange} /> */}
          <div className="select-container">
              <label htmlFor="age">Select Branch</label>
              <select id="age" name='branch' onChange={handleChange}>
                <option value="">Select branch</option>
                {branch && branch?.map(d =>{
                  return(
                    <option data-name={d?.name} value={d?.name}>{d?.name}</option>
                  )
                })}
            
              </select>
            </div> 
              <div className="date-input-container">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name='date'  onChange={handleChangeDate} />
              </div>

              {/* <Select name="branch" date={Arrival} setDate={setArrival} />
              <Select name="date"  date={Departure} setDate={setDeparture} primary= "1px solid white" />
              <Select name="Guests"  date={Guest} setDate={setGuest} primary= "1px solid white" /> */}
            </div>
            <div className="avail_container">
            <ToastContainer />
              <button className='bookbtn' onClick={check}>check availability</button>
              <div>
             

                  <ReusableModal
                  show={isavailable}
                  closeModal={handleCloseModal}
                  formval={(e) => e.preventDefault()}
                  >
                    <h4>Tel us who you are</h4>
                    <div style={{
                      display:'flex',
                      flexWrap:'wrap',
                      width:'100%',
                      margin:'0 auto',
                      gap:'30px'
                    }}>
                      <div>
                        <label htmlFor="branch">branch</label>
                        <br/>
                        <input type="text" id='branch'  value={select && select?.branch} readOnly/>
                      </div>
                      <div>
                        <label htmlFor="date">Date</label>
                        <br/>
                        <input type="date" value={ select && select?.date} readOnly />
                      </div>
                      <div>
                        <label htmlFor="date">Event type</label>
                        <br/>
                            <select id="age" name='branch' onChange={handleEventType}>
                                <option value="">Select Event Type</option>
                                {currentbranch && currentbranch?.map(d =>{
                                  return(
                                    <option data-name={d?.event_type} value={d?.event_type}>{d?.event_type}</option>
                                  )
                                })}
                          </select>
                      </div>
                      <div>
                        <label htmlFor="date">Amount &#x20A6;</label>
                        <br/>
                        <input type="text" value={`${amount?.price || 0}`} readOnly />
                      </div>
                      <div>
                        <label htmlFor="date">Name</label>
                        <br/>
                        <input type="text" />
                      </div>
                      <div>
                        <label htmlFor="date">Phonenumber</label>
                        <br/>
                        <input type="text" />
                      </div>
                      <div>
                      <label htmlFor="date">Email</label>
                        <br/>
                       <input type="email" />
                      </div>

                    </div>
                   
                    <button style={{color:'#fff'}} onClick={() => {
                      setisavailable(!isavailable)
                initializePayment(onSuccess, onClose)
            }}>Procced to Payment</button>
                      {/* <PaystackButton {...componentProps} style={buttonStyle}/> */}
                  
                  </ReusableModal>
                
                
     
    </div>
            </div>
          </Availability>
      </Suite>
      <pre style={{display: 'flex', alignItems: 'center',fontSize: '20px' ,gap: '.5rem', padding: '1.5rem 3rem'}}>
                <h4>Home</h4>
                <p style={{ color: 'rgb(102, 98, 98)'}}>/</p>
                <p style={{ color: 'rgb(102, 98, 98)'}}>{location}</p>
          </pre>
      <div className="event-hall">
        <h1>Event Hall</h1>
        <p>Quisque a dui lorem. In vel tempor felis. Fusce imperdiet, libero non dictum efficitur, neque neque placerat nisl, sit amet porttitor eros magna</p>
      </div>
      <div className="hallImages">
        <div className="half">
          <img src={Hall2} alt="hallImages" />
          <img src={Hall3} alt="hallImages" />
        </div>
        <div className="full">
          <img src={Hall4} alt="hallImages" />
        </div>
        <div className="half2">
          <img src={Hall1} alt="hallImages" />
          <img src={Hall5} alt="hallImages" />
        </div>
      </div>
      <div className="footer">
        <div className="f-image">
          <img src={Glasscup} alt="" />
        </div>
        <div className="f-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium. Massa ultricies mi quis hendrerit dolor magna eget. Nullam eget felis eget nunc lobortis. Faucibus ornare suspendisse sed nisi. Sagittis eu volutpat odio facilisis mauris sit amet massa. Erat velit scelerisque in dictum non consectetur a erat. Amet nulla facilisi morbi tempus iaculis urna. Egestas purus viverra accumsan in nisl. Feugiat in ante metus dictum at tempor commodo. Convallis tellus id interdum velit laoreet. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Dui faucibus in ornare quam. In iaculis nunc sed</p>
        </div>
        <div className="booklink">
          <Arrowlink color="white" bgColor="rgb(0, 0, 0)" text="Book Now" />
        </div>
      </div>
    </Eventwrapper>
  )
}

export default Event

const Availability = styled.section`

      .bookbtn{
        color: #fff;
        padding: 1em;
      }

        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
        row-gap: 1.5rem;
        margin-bottom: 2rem;
        color: white;
        background-color: #fff;
        /* padding: .6rem; */
        border-radius: 20px;
        text-align: start;
        color: #555;

        @media screen and (max-width: 620px) {
          display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0px;
            padding: 0px;
        }

        .select-container {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 200px;
}

label {
  /* font-weight: bold; */
  margin-bottom: 0.5rem;
  font-size: 15px;
}

select {
  background-color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  color: #555;
  font-size: 1rem;
  padding: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select:focus {
  outline: none;
}

option {
  color: #555;
}
.date-input-container {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 200px;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input[type="date"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  display: none;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  -webkit-appearance: none;
  margin: 0;
}

input{
  background-color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  color: #555;
  font-size: 1rem;
  padding: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

input[type="date"]:focus {
  outline: none;
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

const Eventwrapper = styled.section`
  width: 100vw;
  height: 100vh;
  // display: flex;

  .event-hall{
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
    padding: 0 5vw;

      h1{
        font-family:  "font 6";
        font-size: 3rem;
        
      }
      P{
      max-width: 350px;
      text-align: start;
      }
  }
    .hallImages{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 0 .5rem;
      flex-wrap: wrap;
      width: 100%;
      // border: 2px solid red;
      row-gap: 1rem;

      .half:nth-child(1){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 27px;
        padding: 0 .5rem;
        max-width: 384px;

        img:nth-child(1){
          width: 100%;
          height: 557px;
        }
        img:nth-child(2){
          width: 100%;
          height: 362px;
        }
      }

      .half2{
        display: flex;
        flex-direction: column;
        row-gap: 27px;
        padding: 0 .5rem;
        align-items: center;
        justify-content: center;
        max-width: 242px;

        img:nth-child(1){
          width: 100%;
          height: 557px;
          // border: 2px solid red;
        }
        img:nth-child(2){
          width: 100%;
          height: 362px;
        }
      }

      .full{
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 470px;
        img{
          width: 100%;
          height: 946px;
          padding: 0 1rem;
        }
      }
    }
    .footer{
      margin: 5rem 0 !important;
      padding: 0 4vw;
      
      .f-image{
        max-width: 96vw;
        // max-width: 1200px;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
         img{
           width: 100%;
          height: 557px;
        }
      }
    }
    .booklink{
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 2rem;
    }
`;