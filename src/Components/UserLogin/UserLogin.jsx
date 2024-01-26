import React from 'react'
import './UserLogin.css'

import Rectangle_icon from "../Assets/Rectangle.png"
import profile_icon from "../Assets/profile.png"

export const UserLogin = () => {
  return (
<div className='wrapper'>
      <div className="background-color"></div>
    <div className="container">
    <div className="logo">
      <img src={Rectangle_icon} alt="" />
    </div>
      <div className="header">
        <div className="text">USER LOGIN</div>
      </div>
      <div className="inputs">
        <div className="input">
        <img src={profile_icon} alt="" />
          <input type="text" placeholder="Your Username"/>
        </div>
        <div className="password">
          <input type="password" placeholder="*****" />
        </div>
      </div>
      <button className="button" >Sign In</button>
      <div className="forget-password">Forget your Password</div>
    </div>
  </div>
  )
}
export default UserLogin;