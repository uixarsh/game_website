import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";


gsap.registerPlugin(ScrollTrigger)

const About = () =>{

    // Scroll Animation implemented when scroll gets triggered.
    useGSAP (() =>{
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })

    return (
        // Small Heading at Center
        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className="font-general text-sm uppercase md:text-[10px]"> Welcome to Nexus</h2>

                {/* Animated Text */}
                <AnimatedTitle 
                    title="Expl<b>o</b>re the futur<b>e</b> of Web3 gaming in the <br/> Inf<b>i</b>nity Nexus multiverse" 
                    containerClass="mt-5 !text-black text-center" 
                />

                {/* Information about Infinity Nexus */}
                <div className="about-subtext font-general uppercase">
                    <p>The Game of Games begins—your journey now unfolds in Infinity Nexus, the ultimate Web3 MMORPG</p>
                    <p>Infinity Nexus connects players across limitless games and decentralized platforms</p>
                </div>
            </div>

            {/*Adding About Image */}
            <div className ="h-dvh w-screen" id="clip">
                <div className ="mask-clip-path about-image">
                    <img
                        src = "img/about.png"
                        alt = "Background"
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>

            </div>
        </div>
    )
}

export default About