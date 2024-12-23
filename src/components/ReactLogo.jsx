import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import ReactModel from '../models/react_logo.glb'	

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF(ReactModel)
  return (
    <Float floatIntensity={8}>
      <group position={[0, 0, 0]} scale={0.5} { ... props } dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[14, 4, 11]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload(ReactModel)

export default ReactLogo