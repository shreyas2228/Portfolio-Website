import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function WebBackdrop() {
  const groupRef = React.useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.z = state.clock.elapsedTime * 0.08
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.25
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.28
  })

  const radii = [0.7, 1.3, 1.9, 2.5, 3.1, 3.7]
  const webLines: [number, number, number][][] = Array.from({ length: 18 }, (_, index) => {
    const angle = (index / 18) * Math.PI * 2
    const x = Math.cos(angle) * 3.8
    const y = Math.sin(angle) * 3.8
    return [
      [0, 0, 0],
      [x * 0.9, y * 0.9, 0.2],
      [x, y, 0.7],
    ]
  })

  const cityBlocks = [
    [-5, -2.9, -2.5, 1.1],
    [-3.4, -2.7, -1.8, 1.5],
    [-1.6, -3.1, -1.4, 1.6],
    [0.8, -2.8, -1.6, 1.3],
    [2.5, -3.3, -2.0, 1.7],
    [4.2, -2.9, -2.4, 1.4],
  ] as const

  return (
    <group ref={groupRef} position={[0, -0.9, -2.5]}>
      {webLines.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={index % 2 === 0 ? '#64FFDA' : '#29B6F6'}
          lineWidth={0.9}
          transparent
          opacity={0.55}
        />
      ))}

      {radii.map((radius, ringIndex) => {
        const points: [number, number, number][] = Array.from({ length: 64 }, (_, count) => {
          const angle = (count / 64) * Math.PI * 2
          return [
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            ringIndex * 0.18,
          ]
        })

        return (
          <Line
            key={ringIndex}
            points={points}
            color={ringIndex % 2 === 0 ? '#EAF2FF' : '#FF1744'}
            lineWidth={0.7}
            transparent
            opacity={0.28}
          />
        )
      })}

      {cityBlocks.map(([x, y, z, h], index) => (
        <mesh key={index} position={[x, y, z]}>
          <boxGeometry args={[1.2, h, 2.5]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? '#0d1728' : '#101d2d'}
            emissive={index % 2 === 0 ? '#0f2b46' : '#091b30'}
            emissiveIntensity={0.4}
            transparent
            opacity={0.75}
          />
        </mesh>
      ))}
    </group>
  )
}

function RoboticSpider() {
  const groupRef = React.useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.35
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.18
  })

  const legPoints = [
    [[0, 0, 0], [-0.7, -0.7, 0.4]],
    [[0, 0, 0], [-1.1, -1.2, 0.8]],
    [[0, 0, 0], [0.7, -0.7, 0.4]],
    [[0, 0, 0], [1.1, -1.2, 0.8]],
    [[0, 0, 0], [-0.5, 0.8, 0.6]],
    [[0, 0, 0], [-1.2, 1.5, 1.1]],
    [[0, 0, 0], [0.5, 0.8, 0.6]],
    [[0, 0, 0], [1.2, 1.5, 1.1]],
  ] as const

  return (
    <group ref={groupRef} position={[2.9, -0.3, -1.8]} rotation={[0.7, -0.8, 0.2]}>
      <mesh position={[0, 0, 0.2]}>
        <octahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#EAF2FF" emissive="#64FFDA" emissiveIntensity={0.85} />
      </mesh>

      {legPoints.map(([start, end], index) => (
        <Line
          key={index}
          points={[start, end]}
          color={index % 2 === 0 ? '#64FFDA' : '#29B6F6'}
          lineWidth={1.2}
          transparent
          opacity={0.7}
        />
      ))}

      <Line points={[[0, 0.2, 0.3], [0, 1.1, 0.7]]} color="#FF1744" lineWidth={1.1} transparent opacity={0.8} />
      <Line points={[[0, -0.2, 0.3], [0.6, -0.9, 0.7]]} color="#29B6F6" lineWidth={1.1} transparent opacity={0.8} />
    </group>
  )
}

function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }} dpr={[1, 1.8]}>
        <color attach="background" args={['#05070D']} />
        <fog attach="fog" args={['#05070D', 8, 20]} />

        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 4]} intensity={1.7} color="#EAF2FF" />
        <pointLight position={[-5, 2, 2]} intensity={2} color="#29B6F6" />
        <pointLight position={[5, -1, 1]} intensity={1.5} color="#FF1744" />
        <pointLight position={[0, 0, 3]} intensity={1} color="#64FFDA" />

        <Sparkles count={120} scale={[18, 10, 10]} size={2.2} speed={0.6} color="#EAF2FF" opacity={0.75} />
        <WebBackdrop />
        <RoboticSpider />
      </Canvas>
    </div>
  )
}

export default HeroScene
