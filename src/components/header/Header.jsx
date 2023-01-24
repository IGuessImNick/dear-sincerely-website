import React from 'react'
import './header.css'
import Logo from '../../img/logo_black.png'
import {BsSpotify} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
        
        <div className="header__left">
            <div className="header__left-items">
                <div className="header__left-item">HOME</div>
                <div className="header__left-item">SHOP</div>
                <div className="header__left-item">TABS</div>
                <div className="header__left-item">BLOG</div>
                <div className="header__left-item">CONTACT</div>
            </div>
        </div>
        <div className="header__logo">
            {/* <img src={Logo} alt="" className="header__logo-img" /> */}
        </div>
        <div className="header__right">
                <a href="spotify.com">{BsSpotify}</a>
            <div className="header__right-icons">
            </div>
        </div>
    </header>
  )
}

export default Header
