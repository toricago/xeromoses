import { Canvas, useFrame } from '@react-three/fiber'
import {
  useGLTF,
  OrbitControls,
  ContactShadows
  // Environment
} from '@react-three/drei'
import { useRef } from 'react'
// import { useControls } from 'leva'

export default function Banner() {
  // const { model } = useControls({ model: { value: 'Beech', options: Object.keys(MODELS) } })

  return (
    <div style={{ height: '320px' }}>
      <Canvas camera={{ position: [-10, 10, 40], fov: 40 }}>
        <ambientLight intensity={0.3} />
        <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
        <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

function Model() {
  const ref = useRef()

  let frame = 100
  useFrame((state, delta) => {
    if (frame > 1) {
      ref.current.rotation.y +=
        delta * (Math.log(frame) / 2) * Math.log(frame) ** 1.5
    } else {
      ref.current.rotation.y += delta * 0.5
    }
    frame = frame > 1 ? frame - 1 : frame
  })

  const { scene } = useGLTF('/gameboy_cs.glb')

  return (
    <group position={[0, -10, 0]}>
      <primitive object={scene} ref={ref} scale={8} />
      <ContactShadows scale={20} blur={10} far={20} />
    </group>
  )
}
