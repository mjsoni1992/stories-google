import React, { useEffect } from 'react';
import { gsap } from "gsap";

const HeroFooter = () => {
    useEffect(() => {

        setTimeout(function () {
            const tl = gsap.timeline({
                delay: 1,
                scrollTrigger: {
                    trigger: ".heroFooter",
                    start: 'top 80%',
                    end: 'top 25%',
                    scrub: 10
                }
            });
            tl.from(".heroFooter", { duration: 1, y: "-100", opacity: 1 })
        }, 1000)
    }, [])
    return (
        <div className="container heroFooter">
            <div className="hero_header_text">
                <h1><span>Visual stories</span> that feel like yours, because they are.</h1>
            </div>
        </div>

    )
}

export default HeroFooter
