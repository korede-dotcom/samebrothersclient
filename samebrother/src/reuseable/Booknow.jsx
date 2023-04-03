import React from 'react'
import styled from 'styled-components'
import Car from '../assets/car.svg'
import {HiOutlineArrowSmRight} from 'react-icons/hi'
import Book from '../reuseable/smallComp'
// import {Button} from '../reuseable/smallComp';

function booknow(props) {
   
  return (
      <Bookwrapper>
        <RoomsImage>
            <Images>
                <img src={props.image} alt="images" />
            </Images>
            <RoomWord>
                <Name>
                    <h1>{props.name}</h1>
                    <h4>{props.details}<sup>2</sup>, {props.bedtype}</h4>
                 </Name>
                 {/* <Book>
                    <p>book now</p>
                    <HiOutlineArrowSmRight />
                </Book> */}
                <Book text="book now"/>
                {/* <Button /> */}
         </RoomWord>
        </RoomsImage>
      </Bookwrapper>
  )
}

export default booknow;

    const Bookwrapper = styled.div`
        border-radius: 5px;
        opacity: 1;
        max-width: 384px;
        margin-bottom: 20px;
        // height: 650px;
        margin: 20px 5px 0 5px
        `;
        
        const  RoomsImage = styled.div`
        display: flex;
        flex-direction: column;
        align-items: start;
    `;

    const RoomWord = styled.div`
            p{
                opacity:1;
                font-size: 18px;
                text-transform: capitalize;
            }
    `;
    const Images = styled.div`
                margin-bottom: 2rem;
                // width: 384px;
                height: 557px;
            img{
                border-radius: 5px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
    `;
    // const Book = styled.div`
    //         display: flex;
    //         align-items: center;
    //         justify-content: center;
    //         width: 130px;
    //         padding: .5rem .5rem .5rem .2rem;
    //         gap: 10px;
    //         margin-top: 1.5rem;
    //         border: 1px solid black;
    // `;

    const Name = styled.div`
            display: flex;
            flex-direction: column;
            row-gap: .2rem;
    `;