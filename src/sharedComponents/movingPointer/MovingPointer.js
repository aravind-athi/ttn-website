import React, { useState } from 'react'

const MovingPointer = () => {
    let [position, setPosition] = useState([0, 0]);

    const clickHandler = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      
      setPosition([x,y])
      console.log(position)
    };
    return (
      <div className=".moving_container" onClick={(e) => clickHandler(e)}>
        <div
          className="home_container"
          style={{ top: `${position[1]}px`, left: `${position[0]}px` }}
        >a
        </div>
      </div>
    );
}

export default MovingPointer