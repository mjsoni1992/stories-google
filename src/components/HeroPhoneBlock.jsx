import React, { useRef, useEffect } from 'react'
import phoneBGImage from "../assets/img/hero-phone-frame-v2.png";
import { gsap } from "gsap";

const HeroPhoneBlock = () => {

    const phoneRef = useRef(null)
    useEffect(() => {
        setTimeout(function () {
            const tl = gsap.timeline({

                scrollTrigger: {
                    trigger: phoneRef.current,
                    start: "top top",
                    //end: (document.getElementsByClassName("HeroPhoneBlock")[0].offsetHeight + document.getElementsByClassName("heroFooter")[0].offsetHeight + 500),
                    //end: "+=1000",
                    end: "bottom 20%",
                    //endTrigger: ".heroFooter",
                    pin: true,
                    pinSpacing: false,
                    scrub: 3,

                    onEnter: function () {
                        //console.log("On ENter");
                        document.body.style.backgroundColor = "black";
                    },
                    onToggle: ({ isActive }) => {
                        //console.log("isActive", isActive)
                        if (isActive) {
                            document.body.style.backgroundColor = "black";
                        }
                        else {
                            document.body.style.backgroundColor = "white";

                        }
                    },

                    toggleActions: "restart none none none"
                },

            });
            tl.to(phoneRef.current, { duration: 0.5, scale: 1, opacity: 1 });
            //tl.to("body", { backgroundColor: "black" }, "-0.5");



        }, 2000)


    }, [])

    return (
        <div ref={phoneRef} className="HeroPhoneBlock" style={{ backgroundImage: `url(${phoneBGImage})` }}>
            <video autoPlay loop>
                <source src="https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0" type="video/mp4"></source>
            </video>
        </div>
    )
}

export default HeroPhoneBlock
