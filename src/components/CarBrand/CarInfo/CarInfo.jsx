import React from 'react'
import './CarInfo.css'
import { callender, carlogo, carside, dollar, fuel, gearbox, mile } from '../../../assets/export';
    export const CarInfo = ({car}) => {
    return (
        <div className='car-info'>
            <div className="left">
            <div className="source"> <img src={dollar} alt="" /><p> { car.lableP }{car.price}</p></div>
            <div className="source">  <img src={carlogo}alt="" /><p> { car.lableMake }{car.brand}</p></div>
            <div className="source"><img src={carlogo} alt="" /> <p>{ car.lableM }{car.model}</p></div>
            <div className="source"><img src={carside} alt="" /> <p>{ car.lableB }{car.bodyType}</p></div>
            </div>
        <div className="right"> 
            <div className="source"><img src={callender} alt="" /> <p>{ car.lableG }{car.regis}</p></div>
            <div className="source"><img src={fuel} alt="" /><p> { car.lableL }{car.fuel}</p></div>
            <div className="source"><img src={mile} alt="" /><p> { car.lableT }{car.Transmission}</p></div>
            <div className="source"><img src={gearbox} alt="" /> <p>{ car.lableP }{car.price}</p></div>
        </div>
            </div>
    )
}
