/* eslint-disable react-hooks/purity */
/* eslint-disable react-hooks/immutability */
"use client";

import React, { useEffect, useState } from "react";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh, Group } from "three";
import * as THREE from "three";

import { useDarkContext } from "./DarkContext";
import LightRays from "./LightRays";
import { motion } from "motion/react";

function Polygon({
  position,
  rotation,
  scale,
  color,
  speed,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.002 * speed;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const particlesRef = useRef<Group>(null);
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * viewport.width * 2,
          (Math.random() - 0.5) * viewport.height * 2,
          (Math.random() - 0.5) * 10,
        ] as [number, number, number],
        scale: Math.random() * 0.02 + 0.01,
      });
    }
    return temp;
  }, [viewport]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color="#888888" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function MouseTracker({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<Group>(null);
  const { viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (groupRef.current) {
      const x = (state.pointer.x * viewport.width) / 50;
      const y = (state.pointer.y * viewport.height) / 50;

      mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, x, 0.05);
      mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, y, 0.05);

      groupRef.current.rotation.y = mouse.current.x * 0.1;
      groupRef.current.rotation.x = -mouse.current.y * 0.1;
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

function Scene() {
  const { isDark } = useDarkContext();
  console.log("isDark in Scene3D:", isDark);
  useEffect(() => {
    if (isDark == true) {
      setColor("#fff");
    } else {
      setColor("#000");
    }
  }, [isDark]);
  const [color, setColor] = React.useState("#fff");
  const polygons = useMemo(
    () => [
      {
        position: [-4, 2, -5] as [number, number, number],
        rotation: [0, 0, 0] as [number, number, number],
        scale: 1.5,
        color: color,
        speed: 3,
      },
      {
        position: [4, -1, -8] as [number, number, number],
        rotation: [1, 0, 0] as [number, number, number],
        scale: 2,
        color: color,
        speed: 2,
      },
      {
        position: [-2, -2, -6] as [number, number, number],
        rotation: [0, 1, 0] as [number, number, number],
        scale: 1,
        color: color,
        speed: 2.5,
      },
      {
        position: [3, 3, -10] as [number, number, number],
        rotation: [0.5, 0.5, 0] as [number, number, number],
        scale: 2.5,
        color: color,
        speed: 4,
      },
      {
        position: [0, 0, -12] as [number, number, number],
        rotation: [0, 0, 0.5] as [number, number, number],
        scale: 3,
        color: color,
        speed: 3,
      },
    ],
    [color],
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <MouseTracker>
        {polygons.map((polygon, i) => (
          <Polygon key={i} {...polygon} />
        ))}
        <Particles />
      </MouseTracker>
    </>
  );
}

export default function Scene3D({ isMenuOpen }: { isMenuOpen: boolean }) {
  const [menuWidth, setMenuWidth] = useState(0);

  useEffect(() => {
    const updateMenuWidth = () => {
      const menuEl = document.querySelector(
        ".staggered-menu-panel",
      ) as HTMLElement | null;
      if (menuEl) setMenuWidth(menuEl.offsetWidth);
    };
    updateMenuWidth();
    window.addEventListener("resize", updateMenuWidth);
    return () => window.removeEventListener("resize", updateMenuWidth);
  }, []);

  return (
    <motion.div
      animate={{ x: isMenuOpen ? -menuWidth / 2 : 0 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: isMenuOpen ? 0 : 0.1,
      }}
      className="fixed inset-0 -z-10"
    >
      <div className="fixed inset-0 -z-10">
        <div className="fixed inset-0 pointer-events-none">
          <LightRays
            className="custom-rays"
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>

        <Canvas
          className="relative z-10"
          camera={{ position: [0, 0, 10], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </div>
    </motion.div>
  );
}
