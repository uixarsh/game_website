import React, {useRef} from "react"
import AnimatedTitle from './AnimatedTitle'
import gsap from "gsap";
import Button from "./Button";

// Story Mode
const Story = () =>{
    const frameRef = useRef('null');

    // Set the position to default for image.
    const handleMouseLeave = () => {
        const element = frameRef.current;
        gsap.to(element, 
            {
                duration: 0.3,
                rotateX: 0, 
                rotateY: 0,
                ease: 'power1.inOut',
            }
        )
    }
    
    // Logic for handing upon mouse move how the image should react.
    const handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        const element = frameRef.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y-centerY)/centerY) * -10;
        const rotateY = ((x-centerY)/centerX) * 10;

        gsap.to(element, 
            {
                duration: 0.3,
                rotateX, rotateY,
                transformPerspective: 500,
                ease: 'power1.inOut',
            }
        )
    }

    return (
        <section id="prologue" className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="flex size-full flex-col items-center py-10 pb-24">
                
                {/*Small Text Heading */}
                <p className="font-general text-sm uppercase md:text-[10px]"> infinite possibilities</p>
                
                {/*Story Header */}
                <div className="relative size-full">

                    {/*Animating Text */}
                    <AnimatedTitle
                        title = "an ep<b>i</b>c st<b>o</b>ry of <br/>dark<b>n</b>ess"
                        sectionId = "#story"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />

                    {/*Masking the Image and handling over mouse position */}
                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src= "/img/entrance.webp"
                                    alt="entrance"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/*Adding prologue button to the bottom right */}
                <div className="-mt-80 flex w-full fustify-center md:-mt-65 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <Button 
                            id="relam-button" 
                            title="discover prologue"
                            containerClass="mt-5"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story;