import React from 'react'

function ScrollButton() {

    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const scrollTo1 = () => {
        document.getElementById("about").scrollIntoView();
    }

    const scrollTo2 = () => {
        document.getElementById("projects").scrollIntoView();
    }

    const scrollTo3 = () => {
        document.getElementById("interests").scrollIntoView();
    }

    return (
        <>
            <div>
                <button className="topButton"
                    onClick={scrollTo}
                    alt="Home">
                    <i id="top"
                        className="fas fa-eye">
                    </i>Home
                </button>

                <button className="topButton"
                    onClick={scrollTo1}
                    alt="About Me">
                    <i id="top"
                            className="fas fa-photo-video">
                    </i>About
                </button>

                <button className="topButton"
                    onClick={scrollTo2}
                    alt="Projects">
                    <i id="top"
                        className="fas fa-laptop-code">
                    </i>Projects
                </button>

                <button className="topButton"
                    onClick={scrollTo3}
                    alt="Interests">
                    <i id="top"
                        className="fas fa-music">
                    </i>Interests
                </button>
            </div>
        </>
    )
}

export default ScrollButton;