import React from 'react'

const Project = ({id, name, url, deployed, skills}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <h2>{name}</h2>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h4>View the Code<i className="fab fa-github"></i></h4></a>
            <a title={deployed} className="" rel="noopener noreferrer" target="_blank" href={deployed}><h4>Visit Deployed Application</h4></a>
            { skills && <h3>{skills.map(skill => skill)}</h3> }
        </div>
    )
}

export default Project
