import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Ring, useProgress } from '@react-three/drei';
import Mydesk from '../components/Mydesk.jsx';
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


const AnimatedCamera = ({ startAnimation }) => {
  const cameraRef = useRef();
  useFrame(({ clock }) => {
    if (cameraRef.current && startAnimation) {
      const elapsedTime = clock.getElapsedTime();
              
      if (elapsedTime < 3.2) {
        cameraRef.current.position.z = 43 - elapsedTime * 8; // Move closer
        
      }
    }
  });

return <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 30]} />;
};
const Hero = () => {


  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768, minHeight: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobileHorizontal = useMediaQuery({ minWidth: 441, maxWidth: 1024, maxHeight: 800});

  const sizes = calculateSizes(isSmall, isMobile, isTablet, isMobileHorizontal);
  
  // State to track when the animation should start
  const [startAnimation, setStartAnimation] = useState(false);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      // Wait 1 second and start the animation
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 1000);
  
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [progress]);
  

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
            <p className="hero_tag text-gray_gradient">Software Engineer | Computer Science and Engineering Graduate (TU/e, 2025)</p>
        </div>

        <div className='w-full h-full absolute inset-0'>
                {/* <Leva /> */}
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>               
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                <AnimatedCamera startAnimation={startAnimation}/>
                <HeroCamera>
                  <Mydesk 
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
                <directionalLight position={[20, 10, 10]} intensity={0.8} castShadow={false}/>
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