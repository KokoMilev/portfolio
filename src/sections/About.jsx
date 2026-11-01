import React, { Suspense, lazy, useEffect, useState } from 'react'
import Buttom from '../components/Buttom'
import { useInView } from '../hooks/useInView'

const Globe = lazy(() => import('react-globe.gl'))

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

    const { ref: globeWrapperRef, isInView, hasEntered } = useInView();

    useEffect(() => {
        if (isInView) {
            globeEl.current?.resumeAnimation();
        } else {
            globeEl.current?.pauseAnimation();
        }
    }, [isInView]);

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img loading="lazy" src="/assets/cartoonMe.png" alt="grid 1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I'm Kaloyan</p>
                            <p className="grid-subtext">I'm a Software Engineer with a BSc in Computer Science from Eindhoven University of Technology. I enjoy building things that are both technically solid and intuitive to use, and I'm especially drawn to problems where data, systems, and user experience meet.<br /><br />Outside of work, I like experimenting with interactive visuals, exploring new technologies, and understanding how complex systems behave at scale. I value clean design, thoughtful problem-solving, and continuous improvement—both in code and in how I approach challenges.</p>
                        </div>
                    </div>
                </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img 
                    src="/assets/languageMe.png" loading="lazy" 
                    alt="Tech Stack" 
                    className="w-full sm:h-[276px] h-fit object-contain" 
                    />

                    <div>
                    <p className="grid-headtext">Tech Stack</p>
                    <p className="grid-subtext">
                        I work mostly in <span className="font-semibold">TypeScript and React</span>, with
                        Next.js and TanStack, and build AI features with
                        <span className="font-semibold"> Python, LangGraph, and LangChain</span>, including
                        tool-calling agents, RAG, and LLM evaluation. On the backend I use
                        <span className="font-semibold"> Node.js, FastAPI, and .NET</span> with
                        <span className="font-semibold"> PostgreSQL, SQL Server, MongoDB, and Redis</span>.
                        For delivery I work with <span className="font-semibold">Azure, Docker, Kubernetes,
                        and GitHub Actions</span>, and test with <span className="font-semibold">Playwright,
                        Vitest, and pytest</span>. I also enjoy exploring
                        <span className="font-semibold"> Three.js and D3.js</span> for interactive visuals.
                    </p>
                    </div>
                </div>
            </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container"
                     style={{overflow: 'hidden',}}>
                        <div
                            ref={globeWrapperRef}
                            className="rounded-3xl w-full sm:h-[326px] min-h-[220px] flex justify-center items-center"
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {hasEntered && (
                                <Suspense fallback={null}>
                                    <Globe
                                        ref={globeEl}
                                        height={220}
                                        width={220}
                                        backgroundColor='rgba(0, 0, 0, 0)'
                                        backgroundImageOpacity={0.5}
                                        showAtmosphere
                                        showGraticules
                                        globeImageUrl="/textures/globe/earth-night.jpg"
                                        labelsData={[{
                                            lat: 51,
                                            lng: 5.5,
                                            text: "I am here!",
                                            color: "white",
                                            size: 25,
                                        }]}
                                        onGlobeReady={() => globeEl.current?.pointOfView({ lat: 30, lng: 5, altitude: 2 })}
                                    />
                                </Suspense>
                            )}
                        </div>
                        <div>
                            <p className='grid-headtext'>
                                I work remotely across most timezones.</p>
                            <p className='grid-subtext'>I'm based in the Netherlands, with remote work available.</p>
                            <a href="#contact" className="w-auto px-4 py-2 rounded-lg text-white">
                            <Buttom name="Contact me" isBeam containerClass="w-full mt-10" /> 
                            </a>                           
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className="grid-container">
                        <img loading="lazy" src="/assets/grid3.png" alt='grid 3' className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>
                                What I Like Building
                            </p>
                            <p className='grid-subtext'>
                                Tools that make complex data usable: AI agents that gather evidence and recommend next steps, interactive analytics that reveal bottlenecks, and shared components that help other engineers ship faster.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img loading="lazy" src="/assets/grid4.png" alt="grid 4" className="w-full md:h-[126px] sm:h-[266px]  h-fit object-cover sm:object-top" />
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