import { useGLTF, Html } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import { useState, useMemo, useEffect } from "react";
import people from "../data/people";

export default function Person({ position, onClick, name }) {
  const { scene } = useGLTF("/models/person.glb");

  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? 0.63 : 0.6,
    config: { duration: 250 }
  });

  const model = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <group position={position}>
      <animated.primitive
        object={model}
        scale={scale}
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
        <spotLight
          position={[0, 2.8, 0]}
          intensity={2}
          angle={15}
          decay={2}
          penumbra={2}
          color="#ffd6a5"
        />
      )}

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