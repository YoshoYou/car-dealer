import React, { useState } from 'react'
import './Services.css'
import { Service } from '../../data/data';
import { oil_level, sign_out, time } from '../../assets/export';
import { LogIn } from '../LogIn/LogIn';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export const Services = () =>
{
    const [PopUp, setPopUp ] = useState(false );
    return (
        <div className='services'>
            <div className="up">
                <div className="left">
                    <p>Services Station</p>
                    <div className="station">
                        <div className="serv">
                        {
                            Service.map( ( Ser ) => (
                                <p style={{backgroundColor:`${Ser.bg}`,color:"#000"}}>{Ser.a}</p>
                            ))
                            }
                            </div>
                        <div className="book">
                            <p className=' dot white'>Ready</p>
                            <p className='dot red'>Booked</p>
                            <p className=' dot pink'>Current</p>
                        </div>
                    </div>
                    <div className="order">
                        <div className="order-content">
                            <div className="left">
                            <p>Your Order </p>
                            <img src={time} alt="" />
                            </div>
                            <div className="info">
                                <p>Brake Fluid Change</p>
                                <p>Diagnostics</p>
                                <p>External Washing</p>
                            </div>
                        </div>
                        <div className="button">
                            <button>Pay 100$</button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <p>Services Required</p>
                    <Link to="/content"><img className='sign-out' src={sign_out} onMouseEnter={()=>setPopUp(true)} onMouseLeave={()=>setPopUp(false)} alt="" /></Link>
                        {PopUp ?<span className='pop'>Go Back to the main page</span>:"" }
                    <div className="require">
                        <div className="frame">
                            <img src="" alt="" />
                                <p>Center Care</p>
                                <p>Price: 48$ &nbsp;  Processing:1 hour</p>
                        </div>
                        <div className="frame">
                            <img src="" alt="" />
                                <p> Diagnostics</p>
                                <p>Price: 78$ &nbsp; Processing:2hour</p>
                        </div>
                        <div className="frame">
                            <img src="" alt="" />
                                <p>Inner Cleaning</p>
                                <p>Price:80$ &ensp; Processubg:1hour</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="down">
                <div className="material y">
                    <img src={oil_level} alt="" />
                    <p>Brake Pads</p>
                    <p>Wheels &ensp; Still Good</p>
                </div>
                <div className="material r">
                    <img src={oil_level} alt="" />
                    <p>Steering</p>
                    <p>Drivetrain &ensp; Need Change</p>
                </div>
                <div className="material o">
                    <img src={oil_level} alt="" />
                    <p>Oil Leavel</p>
                    <p> Engin &ensp; Don't replace</p>
                </div>
            </div>
        </div>
    )
}
