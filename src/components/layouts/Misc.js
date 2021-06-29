import React from 'react'

const Misc = ({id, name}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <h2>{name}</h2>
        </div>
    )
}

export default Misc
