import React from 'react'
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';





function Height(props){
    const {height}=props
    return(
      
        <div>
            
            <h1></h1>
            <Rectangle width={100} height={height} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
            
        </div>

    )
}

export default Height