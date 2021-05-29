import React, { useState, useRef, useEffect } from 'react';
import { featuredSliderData } from "../utils/data";
import cn from "classnames"
import FeatureSlide from './FeatureSlide';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import useIntersection from "../utils/useIntersection";


function RenderImages({ activeFeatureIndex }) {
    return (
        featuredSliderData.map(({ imageUrl }, index) => (
            <img className={cn({ "as-primary": activeFeatureIndex === index })}
                key={imageUrl}
                style={{ backgroundImage: `url(${imageUrl})` }}
            />

        ))
    )
}

const FeaturedSlider = () => {
    const [activeFeatureIndex, setFeatureIndex] = useState(0);
    const FeatureSlideRef = useRef(null);
    const FeatureSlideRightRef = useRef(null);
    //gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {

        const tl = gsap.to(".feature-slides-left", {
            scrollTrigger: {
                trigger: ".feature-slides-right",
                start: "top top",
                //end: `+=2190`,
                //end: document.getElementById("feature-slider").offsetHeight,
                endTrigger: ".endTrigger",
                scrub: true,
                pin: true,

                markers: true,
            }


        });
        //tl.to(".feature-slides-right img.as-primary", { duration: 0.5, scale: 1 });


    }, [activeFeatureIndex]);



    return (
        <div className="feature-slides-container" ref={FeatureSlideRef} id="feature-slider">
            <div className="feature-slides-left">
                {featuredSliderData.map((feature, index) =>
                    <FeatureSlide
                        key={featuredSliderData.imageUrl}
                        title={feature.title}
                        description={feature.description}
                        index={index}
                        updateActiveImage={setFeatureIndex}
                    />
                )}

            </div>
            <div className="feature-slides-right" ref={FeatureSlideRightRef}>
                <RenderImages activeFeatureIndex={activeFeatureIndex} />
            </div>


        </div>
    )
}

export default FeaturedSlider
