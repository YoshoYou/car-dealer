import React, { useState } from 'react'
import './LogIn.css'
import { logo } from '../../assets/export';
export const LogIn = () =>
{
    const [ mood, setMood ] = useState( "Log In" );
    const handleClickLog = (e) =>
    {
        setMood( e );
    }
    return (
        <div className={`log-in`}>
            <div className="nav-bar">
                <div className="img">
                    <img src={logo} alt="" />
                    <h1>Car Dealer</h1>
                </div>
                <div className="log-sign">
                    <div className="log" onClick={()=>handleClickLog("Log In")}>Log In </div>
                    <div className="sign" onClick={()=>handleClickLog("Sign IN")}> Sign In</div>
                </div>
            </div>
            <div className="form">
                <form >
                    <label htmlFor="e-mail">Enter Your e-mail</label>
                    <input id='e-mail' type="email" placeholder=' Enter Your Email' required/>
                    <label htmlFor="pass-word">Enter Your Password</label>
                    <input id='pass-word' type="password" placeholder='Password'    required />
                    <button type="submit" ><a href="/content">{mood}</a></button>
                </form>
            </div>
        </div>
    )
}
