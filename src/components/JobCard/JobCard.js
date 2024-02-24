import React from 'react'
import './style.css'
import logoImg from "../../logo1.png"

const JobCard = (job) => {
  return (
    <div className="card-container">
	<img className="logo" src={logoImg} alt="user" />
	<br/>
	<span className="pro">{job.jobObj.estimatedSalaryRange.min}-{job.jobObj.estimatedSalaryRange.max}$</span>
	<br/><br/>
	<h3>{job.jobObj.company}</h3>
	<h3>{job.jobObj.title}</h3>
	<p>{job.jobObj.location}</p>
	
	<div className="skills">
		<h4>Skills</h4>
		<ul>
			{job.jobObj.skills.map((skill)=>{
				return <li>{skill}</li>;
			})}
		</ul>
	</div>

    <div className="buttons">
		<button className="primary">
			ApplyNow
		</button>
	</div>
</div>

  )
}

export default JobCard