import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Buttom from '../components/Buttom'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('kaloyandimov.milev@gmail.com');
        setHasCopied(true);
        
        setTimeout(() => {
            setHasCopied(false)
        }, 2000);
    }
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid 1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I'm Kaloyan</p>
                            <p className="grid-subtext">Computer Science and Engineering Graduate</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid 2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">React, Next.js, Tailwind CSS, Three.js</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container" style={{ overflow: 'hidden' }}>
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                heigh={326}
                                width={326}
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
                            // controlsOptions={{
                            //     enableZoom: true,
                            //     minDistance: 350,
                            //     maxDistance: 700,
                            // }}
                            // cameraOptions={{
                            //     position: { x: 0, y: 0, z: 0 }, // Adjust z to set initial distance
                            //     fov: 0,
                            //   }}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>
                                I work remotely across most timezones.</p>
                            <p className='grid-subtext'>I'm based in Netherlands, with remote work available.</p>
                            <Buttom name="Contact me" isBeam containerClass="w-full mt-10" />                            
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