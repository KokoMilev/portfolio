import React, { useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const DemoComputer = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/1970s_retro_computer_low.glb')

  const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4')

  useGSAP( () => {
      gsap.from(group.current.rotation, {
        y: Math.PI / 2,
        duration: 1,
        ease: 'power3.out' 
    })
  }, [txt])
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[11.386, 67.38, 64.862]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_computer_0.geometry}
              material={materials.computer}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_computer_0_1.geometry}
              material={materials.computer}
            />
          </group>
          <group position={[-4.144, 95.486, -40.931]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh 
              castShadow
              receiveShadow
              geometry={nodes.Cube_black_bump_0.geometry}
              material={materials.black_bump}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_black_bump001_0.geometry}
              material={materials['black_bump.001']}
            />
          </group>
          <group position={[298.877, -57.485, 106.696]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane012_floppy_0.geometry}
              material={materials.floppy}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane012_floppyMetal_0.geometry}
              material={materials.floppyMetal}
            />
          </group>
          <group position={[300.389, -53.301, 10.494]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane013_floppy_0.geometry}
              material={materials.floppy}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane013_floppyMetal_0.geometry}
              material={materials.floppyMetal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane013_floppy001_0.geometry}
              material={materials['floppy.001']}
            />
          </group>
          <group position={[110.635, 40.126, 49.085]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane015_floppy_0.geometry}
              material={materials.floppy}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane015_floppyMetal_0.geometry}
              material={materials.floppyMetal}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_computer001_0.geometry}
            material={materials['computer.001']}
            position={[18.997, -23.326, 270.134]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.keyboard_keyboard_0.geometry}
            material={materials.keyboard}
            position={[-4.3, -8.764, 229.367]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.screen_case_black_bump_0.geometry}
            material={materials.black_bump}
            position={[-47.685, 249.688, 106.348]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_black_bump_0.geometry}
            material={materials.black_bump}
            position={[168.761, 327.28, 96.349]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_black_bump_0.geometry}
            material={materials.black_bump}
            position={[167.409, 132.009, 97.534]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_computer001_0.geometry}
            material={materials['computer.001']}
            position={[175.156, 298.856, 97.149]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_Material002_0.geometry}
            material={materials['Material.002']}
            position={[-53.116, 248.067, 106.821]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_black_bump_0.geometry}
            material={materials.black_bump}
            position={[187.766, 198.32, 98.121]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_screen3_0.geometry}
            material={materials.screen3}
            position={[-41.308, 260.599, 96.052]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            >
            <meshBasicMaterial map={txt} />
            </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010_Material002_0.geometry}
            material={materials['Material.002']}
            position={[-138.614, 59.829, 89.476]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_stickers_0.geometry}
            material={materials.stickers}
            position={[222.415, 95.529, 58.679]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_stickersyellow_0.geometry}
            material={materials['stickers.yellow']}
            position={[222.415, 64.558, 54.145]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011_stickers_0.geometry}
            material={materials.stickers}
            position={[222.415, 30.135, 68.567]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane014_sticker_0.geometry}
            material={materials.sticker}
            position={[221.853, 331.837, 43.377]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/1970s_retro_computer_low.glb')

export default DemoComputer