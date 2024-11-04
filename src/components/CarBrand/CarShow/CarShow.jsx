import React from 'react'
import './CarShow.css'
export const CarShow = ({car}) => {
    return (
        <div className='car-show'>
            {
                car.images.map( ( image ) => (
                    <img src={image} alt="" />
                ))
            }
        </div>
    )
}
