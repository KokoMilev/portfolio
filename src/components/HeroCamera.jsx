import { useFrame } from '@react-three/fiber';
import { useRef } from 'react'
import { easing } from 'maath';
const HeroCamera = ({children}) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 30], 0.6, delta);
        easing.damp3(groupRef.current.rotation, [-state.pointer.y /3, -state.pointer.x / 5, 0], 0.25, delta);
    })
  return (
    <group ref={groupRef} scale={1.1}>{children}</group>
  )
}

export default HeroCamera