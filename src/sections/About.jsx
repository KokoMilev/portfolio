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
                            <p className="grid-subtext">Motivated Computer Science student at <a href="https://www.tue.nl/en/" target="_blank" rel="noreferrer" className="modern-link1">TU/e</a> with a strong foundation in data analytics, algorithms,
                            and software development. Experienced in problem-solving, programming, and adapting to new
                            environments through hands-on projects and professional roles at <a href="https://www.asml.com" target="_blank" rel="noreferrer" className="modern-link2">ASML</a>. I thrive on leveraging technology to tackle real-world challenges, combining skills in machine learning, data processing, and cutting-edge programming. With a deep interest in robotics, embedded systems, and financial markets, I bring a disciplined work ethic and a collaborative mindset to every opportunity.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/languageMe.png" alt="grid 2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                            I have strong skills in Python and Java for backend development and problem-solving, along with experience in React, Next.js, and Tailwind CSS for creating scalable and engaging user interfaces. I also enjoy working with Three.js for 3D visualizations and have solid understanding of JavaScript/TypeScript and C/C++, showcasing my versatility. I'm always excited to explore and learn new technologies to enhance my expertise.</p>
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
                        <div>
                            <p className="space-y-2">Contact me</p>
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