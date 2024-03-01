import React from 'react'
import './style.css'
import logoImg from "../../logo1.png"
import { Link } from 'react-router-dom'
import getSymbolFromCurrency from 'currency-symbol-map'
const JobCard = (job) => {
	let currJob = job.jobObj;
	return (
		<Link to="/apply-job"  state={currJob}>
			<div className="card-container">
				<img className="logo" src={logoImg} alt="user" />
				<h3>{currJob.company}</h3>
				<h3>{currJob.title}</h3>
				<p>
					{currJob.location.city}{currJob.location.state?","+currJob.location.state:""}
					<br/>{currJob.location.country}
				</p>
				<br />
				<span className="pro">
					{currJob.estimatedSalaryRange.min}-{currJob.estimatedSalaryRange.max}{getSymbolFromCurrency(currJob.estimatedSalaryRange.currency)}
				</span>
				<br /><br />

				<div className="skills">
					<h4>Skills</h4>
					<ul>
						{currJob.skills.map((skill,index) => {
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