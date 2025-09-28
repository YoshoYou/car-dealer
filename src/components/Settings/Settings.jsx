import React, { useState } from 'react'
import './Settings.css'
import { Profile } from './Profile/Profile';
import { Deatailes } from './Deatailes/Deatailes';
import { sign_out } from '../../assets/export';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export const Settings = () =>
{
    const [ selectedInfo, setSelectedInfo ] = useState( true );
    const [ pop, setPop ] = useState( false );
    const handleSelectInfo = (e) =>
    {
        setSelectedInfo( e );
    };
    const handlePop = (e) =>
    {
        setPop( e );
    };
    return (
        <div className='setting'>
            <Link to="/content"> <img className="sign-out" src={sign_out} alt="" onMouseMove={()=>handlePop(true)} onMouseLeave={()=>handlePop(false)} /></Link>
            {pop ? <span>Get back to the main page</span>:""}
            <div className="header">
                <p onClick={()=>handleSelectInfo(true)}>Profile</p>
                <p onClick={()=>handleSelectInfo(false)}>Deatailes</p>
            </div>
            {
                selectedInfo ? <Profile />:<Deatailes/>
            }
        </div>
        
    )
}
