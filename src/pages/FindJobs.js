import React from 'react'
import JobsList from '../JobList'

export default function FindJobs() {
    return (
        <div style={{ display: "flex", backgroundColor: "green", color: "white", gap:"10px" ,flexWrap:"nowrap",overflow:"auto"  }}>
        {JobsList.map(jobData =>(
            <div class="job-card">
            <h2 class="job-title">{jobData.jobTitle}</h2>
            <p class="company-name">{jobData.companyName}</p>
            <p class="location">{jobData.location}</p>
            <p class="description">{jobData.description}</p>
            <div class="details">
                <p><strong>Openings:</strong> {jobData.openingsCount}</p>
                <p><strong>Experience Level:</strong>{jobData.experienceLevel}</p>
            </div>
            <button style={{backgroundColor:"blueviolet", border:"solid 0px" , color:"white", padding:"10px 20px" , borderRadius:"20px"}}>Apply Now</button>
        </div>
        ))}
        </div>
    )
}
