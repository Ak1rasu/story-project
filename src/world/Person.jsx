import { useGLTF, Html } from "@react-three/drei";
import { useState, useMemo, useEffect } from "react";

export default function Person({ position, onClick, name }) {
  const { scene } = useGLTF("/models/person.glb");

  const [hovered, setHovered] = useState(false);

  const model = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <group position={position}>
      <primitive
        object={model}
        scale={hovered ? 0.63 : 0.6}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
      />

      {hovered && (
        <Html position={[0, 1.8, 0]} center>
          <div className="nameTag">
            {name}
          </div>
        </Html>
      )}
    </group>
  );
}