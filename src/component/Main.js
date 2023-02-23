import React, { useState } from 'react'
import './Main.css'

function Main() {
    const [countVal, setCountVal] = useState(0);
    let num =0; 

    const handlIncr = () => {
        
        setCountVal(countVal + 1)
            }
    const handlDecr = () => {
        if(countVal!== 0){
            num = num - 1;
            setCountVal(countVal - 1)
            
        }
    }

    const handleReset = () => {
        setCountVal(0)
    }
  return (
    <div className='box'>
      <span className='boxHead'>People Counter</span> 
      <div className='count'>{countVal}</div>
      <div className='btns'>
      <button className='btn incr' onClick={handlIncr}>Increment</button>
        
      <button disabled={countVal === 0} className='btn decr' onClick={handlDecr}>Decrement</button>
      </div>

      <button className='btn reset' onClick={handleReset}>Reset</button>

    </div>
  )
}

export default Main
