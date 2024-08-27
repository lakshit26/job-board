import React from 'react'
import JobCard from '../JobCard/JobCard.js'
import './style.css'
import JobFilter from '../JobFilter/JobFilter.js'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  
  const [category, setCategory] = useState("job");
  const [selections, setSelections] = useState([]);
  const [jobs, setJobs] = useState([]);

  function handleCategoryChange(temp) {
    setCategory(temp);
  }
  function addSelection(temp) {
    let copy = selections.slice();
    copy.push(temp);
    setSelections(copy);
  }
  function removeSelection(temp) {
    let copy = selections.filter((value)=>{return value!==temp});
    setSelections(copy);
  }
  function emptySelection(){
    setSelections([]);
  }

  let jobsFiltered=[];
  // if(jobs.length==0) console.log("empty jobs")
  if(selections.length===0) {
    jobsFiltered=jobs.slice();
  }
  else if(category==='job'){
    jobsFiltered = jobs.filter((job) => {
      return selections.some((value)=>{return value===job.title})
    });
  }
  else if(category==='company'){
    jobsFiltered = jobs.filter((job) => {
      return selections.some((value)=>{return value===job.company})
    });
  }

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs").then((res)=>{
      console.log(res)
      setJobs(res.data);
    })
    .catch((err)=>console.log(err))
  }, [])
  
  return (
    <>
      <div className="home-container">
        
        <JobFilter 
          jobs={jobs}
          category={category} 
          setCategory={handleCategoryChange}
          removeSelection={removeSelection} 
          addSelection={addSelection} 
          emptySelection={emptySelection} />

        <div className="cards-container">
          {jobsFiltered.map(
            (job) => {
              return (
                <JobCard key={job.id} jobObj={job} />
              );
            }
          )}
        </div>
        
      </div>
    </>
  )
}

export default Home