import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function CameraLogger() {
  const { camera } = useThree();
  const [pos, setPos] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPos([
        camera.position.x.toFixed(2),
        camera.position.y.toFixed(2),
        camera.position.z.toFixed(2),
      ]); console.log(camera.position); 
    //   console.log(camera.rotation);
      console.log(camera.quaternion);
    }, 100);

    return () => clearInterval(interval);
  }, [camera]);

  return (
    <></>
  );
}