import './WorkCard.css'
import React from 'react'
import WorkCardData from './WorkCardData'
import WorkCard from './WorkCard'

const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Proyectos</h1>
      <div className='project-container'>
        {WorkCardData.map((val,index)=>{
          return(
            <WorkCard
            key={index}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}
            />
          )
        })}

      </div>
    </div>
  )
}

export default Work
