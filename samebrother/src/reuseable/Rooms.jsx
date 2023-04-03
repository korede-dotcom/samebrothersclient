import React from 'react'
// import styles from '../styles/rooms.module.css'
import styles from '../styles/urlpage.module.css'
import Car from '../assets/car.svg'
import { SlLocationPin } from 'react-icons/sl'
import {IoBulbOutline} from 'react-icons/io5'
import {BsWifi2} from 'react-icons/bs'
import {FaCarSide} from 'react-icons/fa'
import {BsScissors} from 'react-icons/bs'

function Rooms(props) {
  return (
    // <div className={styles.interiorContainer}>
        <div className={styles.interior}>
            <div className={styles.interior_image}>
                <img style={{height: '100%', width: '100%', objectFit: 'cover',borderRadius: '5px'}} src={props.images} alt="" />
            </div>
            <div className={styles.interior_text}>
                 <div className={styles.interior_text_left}>
                    <h2>{props.heading}</h2>
                    <p>{props.p1}<sup>{props.sup}</sup>{props.p1i}</p>
                     <p>{props.p2}</p>
                </div>
                <div className={styles.interior_icons}>
                    <pre>{props.pre2}</pre>
                    <p>
                        <BsScissors />
                        <IoBulbOutline />
                         <SlLocationPin />
                    </p>
                    <p>
                        <FaCarSide />
                        <BsWifi2 />
                    </p>
                 </div>
            </div>    
        </div>
    // </div>    
  )
}

export default Rooms
