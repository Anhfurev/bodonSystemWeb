import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RaysPlane({ isDark }: { isDark: boolean }) {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.opacity = isDark ? 0.25 : 0.15;
    }
  });

  return (
    <mesh position={[0, 0, -15]} renderOrder={-10}>
      <planeGeometry args={[50, 50]} />
      <meshBasicMaterial
        ref={materialRef}
        color={isDark ? "#ffffff" : "#000000"}
        transparent
        opacity={0.2}
        depthWrite={false}
      />
    </mesh>
  );
}
