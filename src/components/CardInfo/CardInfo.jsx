import React from 'react'
import './CardInfo.css'
export const CardInfo = ({title,image,info,price}) => {
    return (
        <div className='card-info'>
            <div className='title'>{title}</div>
            <div className='img'><img src={image} alt="" /></div>
            <div className='info'>{info}</div>
            <div className='price'>{price}</div>
        </div>
    )
}
