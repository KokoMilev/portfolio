import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import { easing } from 'maath';
const HeroCamera = ({children}) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 30], 0.25, delta);
    
        // if (!!isMobile) {  
        // easing.damp3(groupRef.current.rotation, [-state.pointer.y /3, -state.pointer.x / 5, 0], 0.25, delta);
        // }

        easing.damp3(groupRef.current.rotation, [-state.pointer.y /3, -state.pointer.x / 5, 0], 0.25, delta);
    })
  return (
    <group ref={groupRef} scale={1.1}>{children}</group>
  )
}

export default HeroCamera