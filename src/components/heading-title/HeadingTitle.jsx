import React from 'react'
import './HeadingTitle.css'

function HeadingTitle ({title,text,arrowContainer,handlePrevClick,handleNextClick}) {
  return (
    <div className='heading-title'>
        <div className="title">

            <h3>{title} </h3>

            {
                arrowContainer ? (
                    <div className="arrows">
                        <div className="arrow-left"
                            onClick={ handlePrevClick }
                        >
                            <i className="bi bi-caret-left-fill"></i>
                        </div>
                        <div className="arrow-right"
                            onClick={handleNextClick}
                        >
                            <i className="bi bi-caret-right-fill"></i>
                        </div> 
                    </div>
                ) : ""
            }
            
        </div>
        
        <div className="description">
            <h5>{text}</h5>
        </div>

    </div>
  )
}

export default HeadingTitle