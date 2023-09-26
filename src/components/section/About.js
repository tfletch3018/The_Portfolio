import React from 'react'
import Skills from '../layouts/Skills'
import { about, skillsBar, section2title } from '../../profile'
import profile from "../../styles/images/profile.jpg";
import Container from "../Container";

function About() {
    return (

        <Container>
            <div id="about" className="effect2">
                <div data-aos="zoom-in-up" data-aos-once="true" className="row">
                    <div className="col-12 offset-md-1 col-md-12 about">
                        <div className="About-title-box">
                            <h1 id="About" className="red-line">{section2title}</h1>
                        </div>
                        <img id="not-dark2" src={profile} alt="profile" />
                        <p className="lead about-text">
                            {about.paragraph}
                        </p>
                    </div>
                </div>
                <div id="Skills">
                    <div className="row d-flex justify-content-center skills">
                        {skillsBar.map((x) =>
                            <Skills faClass={x.faClass} label={x.name} />
                        )}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About
