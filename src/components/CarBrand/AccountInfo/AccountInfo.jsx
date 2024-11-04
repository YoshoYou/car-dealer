import React from 'react'
import './AccountInfo.css'
import { CarInfo } from '../CarInfo/CarInfo';
import { flash, location, mail, phone, photo } from '../../../assets/export';
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
        </div>
        <div className="bottom">
          <p><img src={location} alt="" /> California, USA</p>
          <p><img src={flash} alt="" />Pro Account <span>Visit Profile</span></p>
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

