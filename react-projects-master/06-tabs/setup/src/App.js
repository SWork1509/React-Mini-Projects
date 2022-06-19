import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project/';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const userJobs = await response.json();
      setJobs(userJobs);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return <section className="section loading">
      <h1>Loading...</h1>
    </section>
  }

  const { company, dates, duties, title } = jobs[value];

  return <section className="section">
    <div className="title">
      <h2>Experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((job, i) => {
          return <button key={job.id} onClick={() => setValue(i)}
            className={`job-btn ${i === value && 'active-btn'}`} >
            {job.company}
          </button>
        })}
      </div>
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, i) => {
          return <div key={i} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        })}
      </article>
    </div>

  </section>
}

export default App
