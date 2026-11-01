import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from "../constants/index.js";
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';
import Mydesk from '../components/Mydesk.jsx';
import { useInView } from '../hooks/useInView.js';


const Hero = () => {


  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768, minHeight: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobileHorizontal = useMediaQuery({ minWidth: 441, maxWidth: 1024, maxHeight: 800});

  const sizes = calculateSizes(isSmall, isMobile, isTablet, isMobileHorizontal);
  const { ref: canvasRef, isInView } = useInView('0px');
  
  return (
    <section className="w-full flex flex-col relative"
    id="home"
    style={{
      height: 'max(800px, 100svh)',
    }}
  >
        <div className="relative z-10 w-full mx-auto flex flex-col sm:mt-36 mt-20 mb-20 c-space gap-3">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi, I am Kaloyan <span className="waving-hand">👋</span></p>
            <h1 className="hero_tag text-gray_gradient">Software Engineer building AI agents and data-rich products</h1>
        </div>

        <div ref={canvasRef} className='w-full h-full absolute inset-0'>
            <Canvas className="w-full h-full" frameloop={isInView ? 'always' : 'never'}>
                <Suspense fallback={<CanvasLoader />}>               
                <PerspectiveCamera makeDefault position={[0, 0, 43]} />
                <HeroCamera>
                  <Mydesk
                  position={sizes.deskPosition}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={sizes.deskScale}
                  />
                </HeroCamera>
                <group>
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
          <a href="#contact" className="w-auto px-4 py-2 rounded-lg text-white">
            <Button name="Let's work together" isBeam containerClass="sm:w-auto w-auto px-4 py-2"/>
          </a>
        </div>
    </section>
  )
}

export default Hero