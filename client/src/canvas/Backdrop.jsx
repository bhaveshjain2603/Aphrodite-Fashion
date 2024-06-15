import React, { useRef } from 'react'
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';



const Backdrop = () => {
  const shadows = useRef()

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scae={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
        <RandomizedLight 
          amount={4}
          radius={9}
          intensity={0.55}
          ambient={0.25}
          position={[5,5,-10]}
        />
        <RandomizedLight 
          amount={2}
          radius={2}
          intensity={0.2}
          ambient={0.25}
          position={[-10,5,-4]}
        />
    </AccumulativeShadows>
  )
}

export default Backdrop