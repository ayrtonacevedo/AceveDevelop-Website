import './WorkCard.css'
import React from 'react'


const WorkCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt="img"/>
    <h2 className='project-title'>{props.title}</h2>
    <div className='pro-detail'>
      <p>{props.text}</p>
      <div className='pro-btns'>
        <a href={props.view} className='btn'>View</a>
        <a href={props.source} className='btn'>Source</a>
      </div>
    </div>
  </div>

  )
}

export default WorkCard






