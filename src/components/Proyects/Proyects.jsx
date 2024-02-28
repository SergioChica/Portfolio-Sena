import React from 'react'
import './Proyects.css'
import { NavLink } from 'react-router-dom'


export const Proyects = ({title,desc,link,img}) => {
  return (
    <div className='containerCard'>
        <img src={img} className='imgProyect' />
        <div className='containerTextProyect'>
            <h2 className='titleProyect'>{title}</h2>
            <p className='textPoryect'>{desc}</p>
            <NavLink to={link} className='linkProyect' >Ir al proyecto</NavLink>
        </div>        
    </div>
  )
}
