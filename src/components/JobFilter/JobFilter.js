import React from 'react'
import './style.css'
import Options from './Options'

const JobFilter = ({category,setCategory,removeSelection,addSelection,emptySelection}) => {
    function handleCategoryChange(e){
        setCategory(e.target.value);
        emptySelection();
    }
    return (
        <div className='container-filter'>
            <label className="label-text" htmlFor="standard-select">Filter Jobs </label>
            <br/><br />
            <p>Select category:</p>
            <div className="select">
                <select id="standard-select" value={category} onChange={handleCategoryChange}>
                    <option value="job">Job</option>
                    <option value="company">Company</option>
                </select>
                <span className="focus"></span>
            </div>
            <br/>
            <Options 
                category={category} 
                removeSelection={removeSelection} 
                addSelection={addSelection}/>
        </div>

    )
}

export default JobFilter