import React from 'react'
import './style.css'
import logoImg from "../../logo1.png"
import { Link } from 'react-router-dom'

const JobCard = (job) => {
	return (
		<Link to="/apply-job"  state={job.jobObj}>
			<div className="card-container">
				<img className="logo" src={logoImg} alt="user" />
				<br />
				<span className="pro">{job.jobObj.estimatedSalaryRange.min}-{job.jobObj.estimatedSalaryRange.max}$</span>
				<br /><br />
				<h3>{job.jobObj.company}</h3>
				<h3>{job.jobObj.title}</h3>
				<p>{job.jobObj.location}</p>

				<div className="skills">
					<h4>Skills</h4>
					<ul>
						{job.jobObj.skills.map((skill,index) => {
							return <li key={index}>{skill}</li>;
						})}
					</ul>
				</div>

				<div className="buttons">
					<button className="primary">
						ApplyNow
					</button>
				</div>
			</div>
		</Link>
	)
}

export default JobCard