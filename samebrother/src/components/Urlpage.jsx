import React from 'react'
import Rooms from '../reuseable/Rooms'

// Image and Icons
import { SlLocationPin } from 'react-icons/sl'
import {IoBulbOutline} from 'react-icons/io5'
import {BsWifi2} from 'react-icons/bs'
import {FaCarSide} from 'react-icons/fa'
import {BsScissors} from 'react-icons/bs'
import car from '../assets/car.svg'
import livg from '../assets/livingroom.jpg'
import liv1 from '../assets/living1.jpg'
import liv2 from '../assets/living3.jpg'

import styles from '../styles/urlpage.module.css'

function urlpage(props) {
    const href = window.location.pathname;
    console.log(href.length)
    let location = null;
    if (href.length <= 2) {
        location = 'Home'
    }else{
         location = href.charAt(1).toUpperCase() + href.slice(2, 10);
    }
  return (
    <section className={styles.page_container}>
        <section className={styles.page_deatils}>
           
            <pre>
                <h4>Home</h4>
                <p>/</p>
                <p>{location}</p>
            </pre>
            <div>
                <h1>Rooms &amp; suites</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam pariatur quo quaerat velit iusto tempore, expedita exercitationem corrupti deleniti iste.</p>
            </div>
        </section>
                <pre className={styles.rooms}>Rooms <hr style={{width: '25px',border: '1px solid black'}} /> Suites</pre>
        <section className={styles.interiorWrapper}>
                <Rooms 
                images={livg}
                heading="classic superior room"
                p1="1 bedroom, 40m"
                sup="2"
                p2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quaerat reiciendis perspiciatis cum quisquam commodi obcaecati quo architecto unde quis rerum, natus alias facilis ipsam tempora maxime aliquam nam iste et error explicabo adipisci repellendus amet dolorem? Facere molestias, tenetur libero officia asperiores, perspiciatis eos ratione modi voluptatibus dicta a."
                pre2="preing showing"
                p1i="1, 1 king Bed"
            />
                <Rooms 
                images={liv2}
                heading="classic superior room"
                p1="1 bedroom, 40m"
                sup="2"
                p2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quaerat reiciendis perspiciatis cum quisquam commodi obcaecati quo architecto unde quis rerum, natus alias facilis ipsam tempora maxime aliquam nam iste et error explicabo adipisci repellendus amet dolorem? Facere molestias, tenetur libero officia asperiores, perspiciatis eos ratione modi voluptatibus dicta a."
                pre2="preing showing"
                p1i="1, 1 king Bed"
            />
                <Rooms 
                images={liv1}
                heading="classic superior room"
                p1="1 bedroom, 40m"
                sup="2"
                p2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quaerat reiciendis perspiciatis cum quisquam commodi obcaecati quo architecto unde quis rerum, natus alias facilis ipsam tempora maxime aliquam nam iste et error explicabo adipisci repellendus amet dolorem? Facere molestias, tenetur libero officia asperiores, perspiciatis eos ratione modi voluptatibus dicta a."
                pre2="preing showing"
                p1i="1, 1 king Bed"
            />
                <Rooms 
                images={livg}
                heading="classic superior room"
                p1="1 bedroom, 40m"
                sup="2"
                p2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quaerat reiciendis perspiciatis cum quisquam commodi obcaecati quo architecto unde quis rerum, natus alias facilis ipsam tempora maxime aliquam nam iste et error explicabo adipisci repellendus amet dolorem? Facere molestias, tenetur libero officia asperiores, perspiciatis eos ratione modi voluptatibus dicta a."
                pre2="preing showing"
                p1i="1, 1 king Bed"
            />
        </section>
    </section>
  )
}

export default urlpage
