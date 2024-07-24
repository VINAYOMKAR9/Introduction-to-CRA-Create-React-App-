import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(1)

    const handleAdd = ()=>{
        setCount((prev)=> prev +1 );
    };

  return (
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default Counter
