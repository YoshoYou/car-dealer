import React from 'react'
import './AccountInfo.css'
import { CarInfo } from '../CarInfo/CarInfo';
import { flash, location, mail, phone, photo } from '../../../assets/export';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export const AccountInfo = ( { car } ) => {
  return (
    <div className='account-info'>
      <div className="top">
        <div className="info">
          <img src={photo } alt="" />
            <div className="personal">
                    <p>Eric Colwell</p>
                    <p>Account opening date :26 june,2024</p>
          </div>
          <Link to="/services"> <button>Buy Now</button> </Link>
        </div>
        <div className="bottom">
          <p><img src={location} alt="" /> California, USA</p>
          <p><img src={flash} alt="" />Pro Account</p>
        </div>
        <div className="contact">
          <div className="contain">
            <img src={phone} alt="" />
          <p> Contact: +01 213 XXX XX XX</p>
          </div>
          <div className="contain">
              <img src={mail} alt="" />
          <p> www.ericcowell@gmail.com </p>
          </div>
      </div>
        </div>
      <CarInfo car={car} />
    </div>
  )
}

