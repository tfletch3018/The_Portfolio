import React from 'react'


function ScrollButton() {

    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div>
                <button className="topButton"
                    onClick={scrollTo}
                    alt="Back to Top">
                    <i id="top" 
                    className="fas fa-arrow-alt-circle-up">
                    </i>Back to Top
                </button>
            </div>
        </>
    )
}

export default ScrollButton;