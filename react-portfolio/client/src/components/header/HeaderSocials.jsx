import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/tsvetomir-dimitrov-921678238/" target="_blank"> <BsLinkedin/> </a>
        <a href="https://github.com/dimitrov93" target="_blank"> <BsGithub /> </a>
        <a href="https://www.facebook.com/dimitrovtsvetomir/" target="_blank"> <AiFillFacebook /> </a>
    </div>
  )
}

export default HeaderSocials