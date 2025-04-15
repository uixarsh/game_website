import React, { useState, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideo, setLoadedVideo] = useState(false);

    useEffect(() =>{
        if(loadedVideo){
            setIsLoading(false);
        }
    }, [loadedVideo])

    const handleVideoLoaded = () => {
        setLoadedVideo(true);
    }

    // Animate the Hero Section (creating a Polygon during Scroll event.)
    useGSAP(() =>{
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderBottom: '1px solid #dfdfdf',
        });
        gsap.from('#video-frame',{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger:{
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    })


    return(
        // HERO SECTION
        <div className="relative h-dvh w-screen overflow-x-hidden">

            {/* Loading Animation */}
            {isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                <div className="three-body">
                    <div className="three-body__dot"></div>
                    <div className="three-body__dot"></div>
                    <div className="three-body__dot"></div>
                </div>
                </div>
            )}
            
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                {/* Video Section */}
                <div>
                    <video 
                        src="videos/hero-1.mp4"
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoaded}
                    />
                </div>

                {/* Hero Footer during Video play*/}
                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                    G<b>a</b>ming
                </h1>

                {/*Hero Heading Section */}
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-blue-100"> disc<b>o</b>ver</h1>
                        <p className="mb-5 max-w-64 font-general text-blue-100 uppercase"> Enter the Metagame layer<br/> Unleash the Play Economy</p>
                    
                    <Button id="watch-trailer" title="Ready" leftIcon={<TiLocationArrow />} containerClass="!bg-yellow-300 flex-center gap-1"/>
                    </div>
                </div>
            </div>
            
            {/*Change the Text of Hero Footer during Animation*/}
            <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
                    G<b>a</b>ming
            </h1>
        </div>
    )
}

export default Hero