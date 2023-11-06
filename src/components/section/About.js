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
                        <div className='about'>
                        <div className="About">
                            <h5 className='center' id="About">{section2title}</h5>
                        </div>


                        <div className='center'>
                        <img className="myPic profile" id="not-dark2" src={profile} alt="profile" />
                        </div>
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
