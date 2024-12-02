import React from 'react'
import './MainLanding.css'
import { Cards, CarLogo } from '../../data/data';
import { CardInfo } from '../CardInfo/CardInfo';
import { MobileSlide } from '../MobileSlide/MobileSlide';
export const MainLanding = () => {
    return (
        <div className='main'>
            <MobileSlide  item={CarLogo.map((c)=>(c.img))}  className="slide" />
            <div className="logo">
                {
                    CarLogo.map( ( carLogo ) => (
                        <div className="car-logo"><img src={carLogo.img} alt="car-image" /></div>
                    ))
                }
            </div>
            <div className="cards">
                {
                    Cards.map( ( card,key ) => (
                        <CardInfo
                            title={ card.title }
                            image={ card.img }
                            info={ card.info }
                            price={ card.price }
                        />
                    ))
                }
            </div>
        </div>
    )
}
