import React from 'react'
import logo from '../../assets/logosena.png'
import { Imgs } from '../Imgs/Imgs'
import './TitleCover.css'

export const TitleCover = () => {
  return (
    <div className='containerTitleCover'>
      <div className='containerTitleandLogo'>
      <div className='containerImg'>
      <Imgs img={logo} />
      </div>
      <h1>PERFIL</h1>
      </div>
      <hr className='hrTitleCover' />
    </div>
  )
}
