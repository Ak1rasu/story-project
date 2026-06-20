import { Image, Html } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import { useState, useMemo, useEffect } from "react";
import people from "../data/people";

export default function Person({ position, rotation, onClick, name, image }) {

  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? 0.63 : 0.6,
    config: { duration: 250 }
  });


  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <group position={position} rotation={rotation}>
      <animated.group scale={scale}>
        <Image
          url={image}
          transparent
          scale={[1.2, 1.6]}
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
      </animated.group>

      {hovered && (
        <Html position={[0, 0.7, 0]} center>
          <div className="nameTag">
            {name}
          </div>
        </Html>
      )}

    </group>
  );
}