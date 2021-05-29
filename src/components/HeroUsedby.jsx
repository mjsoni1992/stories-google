import React from 'react'
import logo1 from "../assets/img/1.png"
import logo3 from "../assets/img/3.png"
import logo4 from "../assets/img/4.png"
import logo5 from "../assets/img/5.png"
import logo6 from "../assets/img/6.png"
import logo7 from "../assets/img/7.png"
import logo8 from "../assets/img/8.png"
import logo9 from "../assets/img/9.png"
const HeroUsedby = () => {
    return (
        <div className="heroUsedby">
            <div className="row m-0">
                <div className="col-md-4">
                    <p>The tappable story format has never been more accessible—to creators and readers alike. See what happens when Google brings stories to the open web.</p>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <p>Making Impact At:</p>
                    <div className="logoWrapper">
                        <img alt="Logo" src={logo1} />
                        <img alt="Logo" src={logo1} />
                        <img alt="Logo" src={logo3} />
                        <img alt="Logo" src={logo4} />
                        <img alt="Logo" src={logo5} />
                        <img alt="Logo" src={logo6} />
                        <img alt="Logo" src={logo7} />
                        <img alt="Logo" src={logo8} />
                        <img alt="Logo" src={logo9} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroUsedby
