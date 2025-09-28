import React, { useRef } from 'react'
import './MobileSlide.css'
// import { Bmw, lamborghini, Mercedes, Volvo } from '../../assets/export';
export const MobileSlide = ({item}) =>
{
    let imageContainerRef = useRef( null );
    const prev = () => imageContainerRef.current.scrollLeft -= 250;
    const next = () => imageContainerRef.current.scrollLeft += 250;
    return (
     
            <div className="mobile-container">
             <svg className='arrow left' onClick={prev} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg> 
                    <div className="slide" ref={imageContainerRef}>
                    {
                        item.map( ( c ) => (
                            <div className="">
                                <img src={ c } alt="" /> 
                            </div>
                        ))
                    }
                    </div>
             <svg className='arrow right' onClick={next} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                </div>
            
           
    )
}
