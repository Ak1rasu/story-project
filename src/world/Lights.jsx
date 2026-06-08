import { Environment } from "@react-three/drei";

export default function Lights() {
    return (
        <>
            <directionalLight position={[50, 80, 25]} intensity={0.7} color="#ada397"/>
            <pointLight name="light hall 1"
            position={[-5.2, 1.5, -0.9]}
            intensity={2}
            color="#ffd6a5"
            />
            <pointLight name="light hall 2"
            position={[-3.7, 1.5, -0.9]}
            intensity={2}
            color="#ffd6a5"
            />
            <pointLight name="light hall 3"
            position={[-2, 1.5, -0.8]} 
            intensity={2} 
            color="#ffd6a5"
            />
            <pointLight name="light hall 4"
            position={[-0.4, 1.5, -0.8]} 
            intensity={2} 
            color="#ffd6a5"
            />
            <pointLight name="light red 1"
            position={[2.7, 2.5, -4]} 
            intensity={1.5} 
            color="#ffd6a5"
            />
            <pointLight name="light red 2"
            position={[3.9, 2.5, -4]} 
            intensity={1.5} 
            color="#ffd6a5"
            
            />
            <spotLight name="light red 3"
            position={[5.1, 2.5, -4]} 
            intensity={1.5} 
            color="#ffd6a5"
            />
            <pointLight name="main light"
            position={[3, 3, -0.6]} 
            intensity={1}
            color="#ffd6a5"
            />
            <Environment preset="night" />
        </>
    );
}