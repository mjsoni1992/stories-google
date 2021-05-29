import React, { useEffect } from 'react'
import headerLogo from "../assets/img/web-stories-logo.png";
import { gsap } from "gsap";

const HeroHeader = () => {
    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.5 });
        tl.from(".hero_header_text", { duration: 1.5, y: 50, opacity: 0 })
    }, []);

    return (
        <div className="container">
            <div className="hero_header_text">
                <div className="header_icon">
                    <img src={headerLogo} alt="Stories Logo" />
                </div>
                <h1><span>Stories</span> meet their widest audience ever.</h1>
            </div>
        </div>

    )
}

export default HeroHeader
