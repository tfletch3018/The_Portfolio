import React from 'react'
import Project from '../layouts/Project'
import Misc from "../layouts/Misc"
import { projects, miscellaneous, section3Title, section4Title } from '../../profile'


function Works() {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </>
                <div className="row">
                    {projects && projects.map((x) =>
                        <Project id={x.id} url={x.url} name={x.name} skills={x.skills} deployed={x.deployed} />
                    )}
                </div>
            </div>

            

            <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
                    </div>
                </>
                <div className="row">
                    {miscellaneous && miscellaneous.map((x) =>
                        <Misc id={x.id} name={x.name} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Works
