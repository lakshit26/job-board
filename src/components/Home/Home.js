import React from 'react'
import JobCard from '../JobCard/JobCard.js'
import jobs from '../../data.js'
import './style.css'
function Home() {
  return (
    <div className="cards-container">
      {jobs.map(
        (job)=>{
          return (
            <JobCard key={job.id} jobObj={job} />
          );
        }
      )}
    </div>
    
  )
}

export default Home