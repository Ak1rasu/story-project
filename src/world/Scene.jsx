import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Room from "./Room";
import Lights from "./Lights";
import Person from "./Person";
import people from "../data/people";
import CameraLogger from "../ui/CameraLogger";

export default function Scene({ onPersonClick }) {
  return (
    <Canvas
      camera={{ position: [7.35, 1.41, 4.48], fov: 40 }}
      gl={{ toneMappingExposure: 0.3 }}
      onCreated={({ scene }) => {
        scene.background = null;
      }}
    >
      <Lights />

      <Suspense fallback={null}>
        <Room />

        {people.map((p) => (
          <Person
            key={p.id}
            position={p.position}
            name={p.name}
            onClick={() => onPersonClick(p)}
          />
        ))}
      </Suspense>

      <OrbitControls
        target={[1.64, 0.90, -1.74]}
        enableDamping
      />
      
      {/* <CameraLogger /> */}
    </Canvas>
  );
}