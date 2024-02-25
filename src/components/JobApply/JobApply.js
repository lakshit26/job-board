import React from 'react'
import { useLocation } from 'react-router-dom'
const JobApply = () => {
    let {state} = useLocation();
    return (
    <div>
        {state.title}
    </div>
  )
}

export default JobApply