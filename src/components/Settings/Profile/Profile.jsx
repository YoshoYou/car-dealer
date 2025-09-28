import React, { useState } from 'react'
import './Profile.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export const Profile = () =>
{

  return (
    <>
      <div className='profile'>
        <div className="heading">
          <div className="heading-info">
            <p>Your Photo</p>
            <p className='p-second'>This will be displayed on your profile</p>
          </div>
          <div className="heading-img">
            <input type="file" name='file' />
            <button>Upload Your Image</button>
          </div>
        </div>
        <div className="social">
          <p>Social Profiles</p>
          <div className="accounts">
            <form action="">
              <FaFacebook  className='icon first'/>
              <input type="email"  placeholder='facebook.com/'/>
              <FaSquareXTwitter className="icon second" />
              <input type="email" placeholder='twitter.com/'/>
            </form>
          </div>
        </div>
        
      </div>
      </>
  )
}
