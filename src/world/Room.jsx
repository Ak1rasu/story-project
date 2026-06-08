import { useGLTF } from "@react-three/drei";

export default function Room() {
  const { scene } = useGLTF("/models/room5.glb");
  return <primitive object={scene} />;
}