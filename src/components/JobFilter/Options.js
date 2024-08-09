import React from 'react'
import './checkbox.css'

const Options = ({ jobs, category, removeSelection, addSelection }) => {
    let jobList = new Set();
    let companyList = new Set();
    jobs.forEach((job) => {
        jobList.add(job.title);
        companyList.add(job.company);
    });
    jobList = [...jobList];
    companyList = [...companyList];
    function handleChange(e) {
        const { value, checked } = e.target;
        if (checked) {
            addSelection(value);
        }
        else {
            removeSelection(value);
        }
    }

    return (
        <div className="container">
            <ul className="ks-cboxtags">
                {
                    category === 'job' ? (
                        jobList.map((job, index) => {
                            return (<li key={index}>
                                <input type="checkbox"
                                    id={`checkboxJob${index}`}
                                    value={job}
                                    onChange={handleChange}
                                />
                                <label htmlFor={`checkboxJob${index}`}>{job}</label>
                            </li>);
                        })
                    )
                        : category === 'company' ? (
                            companyList.map((company, index) => {
                                return (<li>
                                    <input
                                        type="checkbox"
                                        id={`checkboxCompany${index}`}
                                        value={company}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor={`checkboxCompany${index}`}>{company}</label>
                                </li>);
                            })
                        ) : null
                }
            </ul>
        </div>

    )
}

export default Options