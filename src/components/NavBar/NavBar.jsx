import React, { useState } from 'react'
import './NavBar.css'
import {  bell, logo, self_img, setting, sign_out } from '../../assets/export';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export const NavBar = () =>
{
    const [ hidden, setHidden ] = useState( false );
    const [ active, setActive ] = useState( false );
    const handleActive = (e) =>
    {
        setActive( !active );
    }
    return (
        <div className="nav">
                <div className="nav-logo">
                    <h1><img className='logo' src={logo} alt="logo" />Car Dealer</h1>
                </div>
            <div className="nav-account">
                <svg xmlns="http://www.w3.org/2000/svg" className='menu' onClick={handleActive}  viewBox="0 -960 960 960"  fill="#5f6368"><path d="M80-160v-160h160v160H80Zm240 0v-160h560v160H320ZM80-400v-160h160v160H80Zm240 0v-160h560v160H320ZM80-640v-160h160v160H80Zm240 0v-160h560v160H320Z"/></svg>
                    {/* <Link to="/car-dealer"><img className='bell' src={sign_out} onMouseEnter={()=> setHidden(true)} onMouseLeave={()=> setHidden(false)} alt="" /></Link>   */}
                {/* { hidden ? <span>Sign out</span> : "" } */}
                
                <div className={ `side-nav ${ active ? "active" : "" }` }>
                   
                        <Link to="/settings">
                            <div className='list'><img src={setting} alt="" />
                            <p>Settings</p>
                            </div>
                        </Link>
                        <Link to="Services">
                            <div className='list'><img src={bell} alt="" />
                            <p>Services</p>
                            </div>
                        </Link>
                        <Link to="/car-dealer">
                            <div className='list'><img src={ sign_out } alt="" />
                            <p>Sign Out</p> 
                            </div>
                        </Link>
                    
                </div>
                
            </div>
            </div>
    )
}
