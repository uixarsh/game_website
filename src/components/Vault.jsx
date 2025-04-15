import React from "react";
import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);
  
    const handleMouseMove = (event) => {
      if (!itemRef.current) return;
  
      const { left, top, width, height } =
        itemRef.current.getBoundingClientRect();
  
      const relativeX = (event.clientX - left) / width;
      const relativeY = (event.clientY - top) / height;
  
      const tiltX = (relativeY - 0.5) * 20;
      const tiltY = (relativeX - 0.5) * -20;
  
      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
      setTransformStyle(newTransform);
    };
  
    const handleMouseLeave = () => {
      setTransformStyle("");
    };
  
    return (
      <div
        ref={itemRef}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
      >
        {children}
      </div>
    );
  };

const BentoVidCard = ({src, title, description, isComingSoon}) => {
    return(
        <div className="relative size-full">
            <video 
                src = {src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-ful flex-col justify-between p-5 text-blue-50 uppercase robert-regular">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-bs"> {description} </p>
                    )}
                </div>
            </div>
        </div>
    )
}

const BentoImgCard = ({src, title, description, isComingSoon}) => {
    return(
        <div className="relative size-full">
            <img 
                src = {src}
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-ful flex-col justify-between p-5 text-blue-50 uppercase robert-regular">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-bs"> {description} </p>
                    )}
                </div>
            </div>
        </div>
    )
}

const Vault = () => {
    return (
        <section id="vault" className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-1 py-24">
                <p className="font-circular-web text-xl text-blue-50 uppercase mb-2">
                    Step Into Metagame Infinity
                </p>

                <p className="max-w-md font-general text-md text-blue-50 opacity-50">
                    Immerse yourself in a boundless, ever-evolving universe where diverse digital realms and assets merge into a seamless overlay on your world.
                </p>
                </div>

                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoVidCard 
                        src = "videos/feature-1.mp4"
                        title = {<><b>a</b>zure</>}
                        description = "A living city of light and motion, Azure blends infinite realms into a single, ever-shifting metagame experience."
                        isComingSoon
                    />
                </BentoTilt>

                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoImgCard 
                            src="img/feature-2.png"
                            title={<><b>a</b>sh</>}
                            description="Forged in pixels and passion—Ash leads the charge in a world ready to grow beyond imagination."
                            isComingSoon
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoImgCard
                            src="img/feature-3.jpg"
                            title={<>vel<b>o</b>citron</>}
                            description=""
                            isComingSoon
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoImgCard
                            src="img/feature-4.jpg"
                            title={
                            <>
                                sk<b>y</b>ris
                            </>}
                            description=""
                            isComingSoon
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_2">
                        <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                            <h1 className="bento-title special-font max-w-64 text-black"> 
                                M<b>o</b>re co<b>m</b>ing s<b>o</b>on
                            </h1>
                            <TiLocationArrow className="m-5 scale-[8] self-end" />
                        </div>
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_2">
                        <video
                            src="/videos/feature-5.mp4"
                            loop
                            muted
                            autoPlay
                            className="size-full object-cover object-center"
                        />
                    </BentoTilt>
                    
                </div>
            </div>

        </section>
    )
}

export default Vault;