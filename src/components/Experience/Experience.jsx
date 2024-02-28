import React from 'react'

export const Experience = ({img,progress,text}) => {
  return (
    <div className='containerCardExperience'>
        <img src={img} alt="" className='imgExperience' />
        <div className='progressAndText'>
        <progress max='100' value={progress}></progress>
        <p className='textExperience'>{text}</p>
        </div>
    </div>
  )
}
