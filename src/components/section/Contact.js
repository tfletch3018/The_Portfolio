import React from 'react'
import Container from '../Container';
import { contact, section5Title, social } from '../../profile'
import ScrollButton from "./Footer"

function Contact() {

    return (
        <Container>

            <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <>
                        <div className="git-head-div text-center mx-auto">
                            <h1 id="Contact" className="git-head">{section5Title}</h1>
                        </div>
                    </>

                    <div className='center'>
                                    <p className='navBorder'>              </p>
                                </div>


                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <p className="lead justify-content-center align-items-center">
                            {contact.pitch}
                        </p>



                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <div className="inline-block">
                                <div className="center">
                                {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                                {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                                {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                                {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}
                                {social.tiktok && <a title="Visit Tiktok profile" rel="noopener noreferrer" target="_blank" href={social.tiktok}><i className="fab fa-tiktok"></i></a>}
                                {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                                </div>
                                <br />
                                
                                <>
                                <div className='center'>
                                    <p className='navBorder'>            </p>
                                </div>
                                    <div className="center">
                                        
                                        <ScrollButton />
                                    </div>
                                </>
                            </div>

                        </div>
                    </div>
                </div>

                <p id="not-dark" className="Copy">2023 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
            </div>

        </Container>
    )
}

export default Contact
