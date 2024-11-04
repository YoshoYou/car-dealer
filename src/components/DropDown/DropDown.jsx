import React from 'react'
import './DropDown.css'
import { logo } from '../../assets/export';
export const DropDown = ({setToggleMenu,toggleMenu}) => {
    return (
        <div className={`drop-menu ${toggleMenu ? "show":""}`}>
            <div className="logo">
                <img src={ logo } alt="" />
                <p>Car Dealer</p>
            </div>
            <ul>
                <li>khjh</li>
                <li>lkjl</li>
                <li>kjlj</li>
                <li>lkjlj</li>
            </ul>
        </div>
    )
}
