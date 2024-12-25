import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf'
  );

  useGSAP(  () => {
    gsap.to(
      targetRef.current.rotation,
      { y: targetRef.current.rotation.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      })
    });

  return (
    <mesh {...props} ref={targetRef} scale={[1, 1, 1]} rotation={[0, 0-Math.PI / 5, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
