import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei'
import Mydesk from '../components/mydesk';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { Leva } from 'leva';
import { useControls } from 'leva'
const Hero = () => {
  const x = useControls('mydesk', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10 
    },
    scale: {
      value: 1,
      min: 0.1,
      max: 10
    }
  } 
  )
  return (
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi, I am Kaloyan <span className="waving-hand">👋</span></p>
            <p className="hero_tag text-gray_gradient">Computer Science and Engineering Graduate</p>
        </div>

        <div className='w-full h-full absolute inset-0'>
                <Leva />
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>               
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                <Mydesk 
                // scale={0.5} 
                // position={[0, 0, 0]}
                // rotation={[0, -Math.PI / 2, 0]}
                position={[x.positionX, x.positionY, x.positionZ]}
                rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                scale={[x.scale, x.scale, x.scale]}
                />
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero