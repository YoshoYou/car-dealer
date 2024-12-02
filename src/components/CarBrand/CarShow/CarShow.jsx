import React from 'react'
import './CarShow.css'
import { MobileSlide } from '../../MobileSlide/MobileSlide';
export const CarShow = ({car}) => {
    return (
        <div className='car-show'>
            <MobileSlide item={car.images}  />
            <div className="images">
            {
                car.images.map( ( image ) => (
                    <img src={image} alt="hi" />
                ))
            }
            </div>

        </div>
    )
}
