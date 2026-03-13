/* eslint-disable react/no-unknown-property */
import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingGeometry() {
  const groupRef = useRef(null)
  const torusRef = useRef(null)
  const polyRef = useRef(null)
  const ringRef = useRef(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.16
      groupRef.current.position.y = Math.sin(t * 0.45) * 0.09
    }

    if (torusRef.current) {
      torusRef.current.position.y = Math.sin(t * 0.9) * 0.24
      torusRef.current.rotation.x = 0.45 + t * 0.1
      torusRef.current.rotation.y = t * 0.2
    }

    if (polyRef.current) {
      polyRef.current.rotation.x = t * 0.2
      polyRef.current.rotation.z = t * 0.12
      polyRef.current.position.y = Math.sin(t * 0.8) * 0.27
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.12
      ringRef.current.rotation.y = t * 0.16
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={torusRef} position={[-1.28, 0.15, -0.2]}>
        <torusKnotGeometry args={[0.52, 0.16, 144, 24]} />
        <meshStandardMaterial color="#7effdc" metalness={0.55} roughness={0.24} emissive="#0a3f39" />
      </mesh>

      <mesh ref={polyRef} position={[1.38, -0.16, -0.65]}>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#5db4ff" metalness={0.45} roughness={0.34} emissive="#122750" />
      </mesh>

      <mesh ref={ringRef} position={[0.25, -0.65, -1.6]}>
        <torusGeometry args={[1.85, 0.03, 32, 220]} />
        <meshBasicMaterial color="#5db4ff" transparent opacity={0.45} />
      </mesh>
    </group>
  )
}

function ParticleField() {
  const particlesRef = useRef(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(840 * 3)
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = (Math.random() - 0.5) * 12
      arr[i + 1] = (Math.random() - 0.5) * 8.5
      arr[i + 2] = (Math.random() - 0.5) * 9
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (!particlesRef.current) return
    const elapsed = clock.getElapsedTime()
    particlesRef.current.rotation.y = elapsed * 0.03
    particlesRef.current.rotation.x = Math.sin(elapsed * 0.2) * 0.04
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        color="#7effdc"
        size={0.028}
        sizeAttenuation
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.7]}
      camera={{ position: [0, 0, 4.2], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      frameloop="always"
    >
      <color attach="background" args={['#04060b']} />
      <fog attach="fog" args={['#04060b', 4, 11]} />
      <ambientLight intensity={0.44} />
      <directionalLight position={[4, 4, 2]} intensity={1.25} color="#a2dcff" />
      <directionalLight position={[-3, -2, -4]} intensity={0.65} color="#7effdc" />
      <FloatingGeometry />
      <ParticleField />
    </Canvas>
  )
}

export default HeroScene
