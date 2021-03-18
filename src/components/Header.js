import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h1>&lt;Daniel Santos/&gt; </h1>
                <Typed
                    className="typed-text"
                    strings={["Web Developer", "Learner", "Software Developer"]}
                    typeSpeed={30}
                    backSpeed={60}
                    loop
                />
                {/*--<a href="#" className="btn-contact-me">Contact me</a> */}
            </div>
        </div>
    )
}

export default Header
