import React, { useEffect } from 'react';
import { photos } from "../utils/data";
import { videos } from "../utils/data";
import HeroPhoneBlock from './HeroPhoneBlock';
import { gsap } from "gsap";
const HeroCollage = () => {

    useEffect(() => {

        const tl = gsap.timeline({

        });
        tl.from(".HeroCollage .HeroPhoneBlock", { duration: 1, y: 300, opacity: 1 }, "+1")
        tl.from(".HeroCollage .leftCol img, .HeroCollage .leftCol video, .HeroCollage .rightCol img, .HeroCollage .rightCol video", { duration: 1, y: 100, opacity: 0, stagger: 0.4 })



    }, [])
    function ImageElement({ src }) {
        return (
            <img src={src} alt="" />
        )

    }
    function VideoElement({ src }) {
        return (
            <video autoPlay loop className="videosCollage">
                <source src={src} type="video/mp4"></source>
            </video>
        )

    }

    return (
        <div className="HeroCollage">
            <div className="row m-0">
                <div className="leftCol col-md-5">
                    {photos && photos.slice(0, 2).map((photo) => (
                        <ImageElement key={Math.random().toString(36).substring(7)} src={photo} />
                    ))}
                    {videos && videos.slice(0, 1).map((video) => (
                        <VideoElement key={Math.random().toString(36).substring(7)} src={video} />
                    ))}
                </div>
                <div className="col-md-2">
                    <HeroPhoneBlock />
                </div>
                <div className="rightCol col-md-5">
                    {videos && videos.slice(1, videos.length).map((video) => (
                        <VideoElement key={Math.random().toString(36).substring(7)} src={video} />
                    ))}
                    {photos && photos.slice(2, photos.length).map((photo) => (
                        <ImageElement key={Math.random().toString(36).substring(7)} src={photo} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default HeroCollage
