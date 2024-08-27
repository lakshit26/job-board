import React, { useState } from 'react'
import axios from 'axios'
import './style.css'
import deleteImg from "../../delete.png"

function UploadJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    skills: [],
    city: "",
    state: "",
    country: "",
    responsibilities: [],
    maxsalary: "",
    minsalary: ""
  })

  const [skill, setSkill] = useState("")
  const [responsibility, setResponsibility] = useState("")

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "application/json" } };
    console.log(formData)
    axios.post("http://localhost:5000/api/upload/jobs", JSON.stringify(formData), config)
  }

  const handelInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          {/* <img src="your-image-here.jpg" /> */}
          <form>
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="title" className="formbold-form-label"> Job Title </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="formbold-form-input"
                  value={formData.title}
                  onChange={handelInputChange}
                />
              </div>
              <div>
                <label htmlFor="company" className="formbold-form-label"> Company </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="formbold-form-input"
                  value={formData.company}
                  onChange={handelInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="formbold-form-label"> Job Description </label>
              <input
                type="text"
                name="description"
                id="description"
                className="formbold-form-input"
                value={formData.description}
                onChange={handelInputChange}
              />
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="skills" className="formbold-form-label">
                Skills Required
              </label>
              {formData.skills.map(
                (skill_i, index) => {
                  return (
                    <div className="list-item" key={index}>
                    <div>{skill_i}</div>
                    <img onClick={()=>{setFormData({...formData,skills:formData.skills.filter((s,i)=>i!==index)})}} 
                    className="delete-icon" 
                    src={deleteImg}
                    alt="delete"/>
                    </div>
                  )
                }
              )}
              <div className="input-with-button">
                <input
                  type="text"
                  name="skills"
                  id="skills"
                  className="formbold-form-input"
                  value={skill}
                  onChange={(e) => { setSkill(e.target.value) }}
                ></input>
                <button className="add-to-list" onClick={(e) => {
                  e.preventDefault();
                  setFormData({ ...formData, skills:[...formData.skills,skill]});
                  setSkill("");
                }}>ADD</button>
              </div>
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="address" className="formbold-form-label"> Address </label>
              <input
                type="text"
                name="city"
                id="address"
                placeholder="City"
                className="formbold-form-input formbold-mb-3"
                value={formData.city}
                onChange={handelInputChange}
              />
              <input
                type="text"
                name="state"
                id="address2"
                placeholder="State"
                className="formbold-form-input formbold-mb-3"
                value={formData.state}
                onChange={handelInputChange}
              />

              <input
                type="text"
                name="country"
                id="address3"
                placeholder="Country"
                className="formbold-form-input formbold-mb-3"
                value={formData.country}
                onChange={handelInputChange}
              />
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="responsibilities" className="formbold-form-label">
                Responsibilities of the Employee
              </label>
              {formData.responsibilities.map(
                (responsibility_i, index) => {
                  return (
                    <div className="list-item" key={index}>
                    <div>{responsibility_i}</div>
                    <img onClick={()=>{setFormData({...formData,responsibilities:formData.responsibilities.filter((r,i)=>i!==index)})}} 
                      className="delete-icon" 
                      src={deleteImg}
                      alt="delete"/>
                    </div>
                  )
                }
              )}
              <div className="input-with-button">
                <input
                  type="text"
                  name="responsibilities"
                  id="responsibilities"
                  className="formbold-form-input"
                  value={responsibility}
                  onChange={(e) => { setResponsibility(e.target.value) }}
                ></input>
                <button className="add-to-list" onClick={(e) => {
                  e.preventDefault();
                  setFormData({ ...formData, responsibilities:[...formData.responsibilities,responsibility]});
                  setResponsibility("");
                }}>ADD</button>
              </div>
            </div>

            <div className="formbold-mb-3 formbold-input-flex">
              <label htmlFor="salary" className="formbold-form-label"> Estimated Salary Range </label>

              <input
                type="number"
                name="maxsalary"
                id="salary"
                placeholder="Min"
                className="formbold-form-input formbold-mb-3"
                value={formData.maxsalary}
                onChange={handelInputChange}
              />
              -
              <input
                type="number"
                name="minsalary"
                id="salary2"
                placeholder="Max"
                className="formbold-form-input formbold-mb-3"
                value={formData.minsalary}
                onChange={handelInputChange}
              />
            </div>

            <button type="submit" onClick={handelFormSubmit} className="formbold-btn">Upload Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UploadJob