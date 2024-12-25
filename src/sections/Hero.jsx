import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Ring } from '@react-three/drei';
import Mydesk from '../components/mydesk';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from "../constants/index.js";
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Buttom from '../components/Buttom.jsx';
const Hero = () => {


  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768, minHeight: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobileHorizontal = useMediaQuery({ minWidth: 441, maxWidth: 1024, maxHeight: 800});

  const sizes = calculateSizes(isSmall, isMobile, isTablet, isMobileHorizontal);
  
  return (
    <section className="w-full flex flex-col relative"
    id="home"
    style={{
      height: 'clamp(800px, 100vh, 100%)', // Dynamic height with a minimum of 344px
      paddingBottom: '30rem',
    }}
  >
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 mb-20 c-space gap-3">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi, I am Kaloyan <span className="waving-hand">👋</span></p>
            <p className="hero_tag text-gray_gradient">Computer Science and Engineering Graduate</p>
        </div>

        <div className='w-full h-full absolute inset-0'>
                {/* <Leva /> */}
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>               
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                <HeroCamera>
                  <Mydesk 
                  // scale={0.5} 
                  // position={[0, 0, 0]}
                  // rotation={[0, -Math.PI / 2, 0]}
                  position={sizes.deskPosition}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={sizes.deskScale}
                  />
                </HeroCamera>
                <group>
                  <Target position={sizes.targetPosition} scale={1.5}/>
                  <ReactLogo position={sizes.reactLogoPosition} />
                  <Cube position={sizes.cubePosition} /> 
                  <Rings position={sizes.ringPosition} />
                </group>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
                </Suspense>
            </Canvas>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center">
          <a href="#about" className="w-auto px-4 py-2 rounded-lg text-white">
            <Buttom name="Let's work together" isBeam containerClass="sm:w-auto w-auto px-4 py-2"/>
          </a>
        </div>
    </section>
  )
}

export default Hero