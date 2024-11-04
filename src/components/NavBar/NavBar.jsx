import React, { useState } from 'react'
import './NavBar.css'
import { bag, bell, car, dashboard, Line, logo, self_img, setting, sign_out } from '../../assets/export';
export const NavBar = () =>
{
    const [ hidden, setHidden ] = useState( false );
    return (
        <div className="nav">
                <div className="nav-logo">
                    <h1><img className='logo' src={logo} alt="logo" />Car Dealer</h1>
                </div>
            <div className="nav-account">
                    <img className='selfi' src={ self_img } alt="" />
                    <a href="/"><img className='bell' src={sign_out} onMouseEnter={()=> setHidden(true)} onMouseLeave={()=> setHidden(false)} alt="" /></a>  
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="30px" className='bell' viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"/></svg>                    */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="menu" viewBox="0 -960 960 960"  ><path d="M120-840h320v320H120v-320Zm80 80v160-160Zm320-80h320v320H520v-320Zm80 80v160-160ZM120-440h320v320H120v-320Zm80 80v160-160Zm440-80h80v120h120v80H720v120h-80v-120H520v-80h120v-120Zm-40-320v160h160v-160H600Zm-400 0v160h160v-160H200Zm0 400v160h160v-160H200Z"/></svg>
                    {hidden ? <span>Sign out</span> : ""}
            </div>
            </div>
    )
}
