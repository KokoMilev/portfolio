import React, { useEffect, useState } from 'react'
import Globe from 'react-globe.gl'
import Buttom from '../components/Buttom'
const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const globeEl = React.useRef();
    const handleCopy = () => {
        navigator.clipboard.writeText('kaloyandimov.milev@gmail.com');
        setHasCopied(true);
        
        setTimeout(() => {
            setHasCopied(false)
        }, 2000);
    }

    useEffect(() => {
        if (globeEl.current) {
            globeEl.current.pointOfView({ lat: 30, lng: 5, altitude: 2 });
        }
    }, [globeEl]);

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/cartoonMe.png" alt="grid 1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I'm Kaloyan</p>
                            <p className="grid-subtext">I’m a Computer Science and Engineering graduate from <a href="https://www.tue.nl/en/" target="_blank" rel="noreferrer" className="modern-link1">TU Eindhoven</a> with hands-on experience in software development across backend, frontend, and embedded systems. I’ve worked on projects ranging from healthcare mobile apps and computer vision platforms to robotics and interactive web applications. My professional experience includes building cloud-based solutions in .NET/C#, React Native apps for healthcare, and vision systems for large-scale hardware deployments. I thrive at the intersection of technology and problem-solving, always eager to learn and adapt.
                            </p>
                        </div>
                    </div>
                </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img 
                    src="/assets/languageMe.png" 
                    alt="Tech Stack" 
                    className="w-full sm:h-[276px] h-fit object-contain" 
                    />

                    <div>
                    <p className="grid-headtext">Tech Stack</p>
                    <p className="grid-subtext">
                        Skilled in <span className="font-semibold">Java, C#, and Python</span> for backend 
                        development and problem-solving, with strong experience in 
                        <span className="font-semibold"> React, Next.js, and TypeScript</span> for 
                        building scalable web applications. Comfortable working with 
                        <span className="font-semibold"> SQL, MongoDB, and Firebase</span> for data 
                        management, and experienced in <span className="font-semibold">Docker, 
                        Kubernetes, and Azure</span> for deployment and cloud solutions. 
                        I also enjoy experimenting with <span className="font-semibold">Three.js </span> 
                        for 3D visualizations and continue to explore new technologies 
                        to broaden my expertise.
                    </p>
                    </div>
                </div>
            </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container"
                     style={{overflow: 'hidden',}}>
                        {/* <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"> */}
                        <div
                            className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <Globe
                                height={220}
                                width={220}
                                backgroundColor='rgba(0, 0, 0, 0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 51,
                                    lng: 5.5,
                                    text: "I am here!",
                                    color: "white",
                                    size: 25,
                                }]}
                            ref={globeEl}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>
                                I work remotely across most timezones.</p>
                            <p className='grid-subtext'>I'm based in Netherlands, with remote work available.</p>
                            <a href="#contact" className="w-auto px-4 py-2 rounded-lg text-white">
                            <Buttom name="Contact me" isBeam containerClass="w-full mt-10" /> 
                            </a>                           
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className="grid-container">
                        <img src='/assets/grid3.png' alt='grid 3' className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>
                                My Passion for Coding
                            </p>
                            <p className='grid-subtext'>
                                I'm a passionate developer who thrives on the challenge of creating innovative solutions that not only meet the needs of users but also tackle complex problems.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid 4" className="w-full md:h-[126px] sm:h-[266px]  h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className='grid-subtext text-center'>Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />	
                                <p className="lg:text-xl md:text-l font-medium text-gray_gradient text-white">kaloyandimov.milev@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About