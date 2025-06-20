import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import Floor from "./Floor";
import Arches from "./Arches";
import Frames from "./Frames";

const FloorScene = () => {
  const groupRef = useRef();
  const data = useScroll();

  useFrame((state) => {
    const offset = data.offset;
    state.camera.position.y = -1;

    const targetZ = offset * -20;

    state.camera.position.z += (targetZ - state.camera.position.z) * 0.1;

    state.camera.lookAt(0, -1, state.camera.position.z - 5);
  });

  return (
    <group ref={groupRef}>
      <color attach="background" args={["#ffffff"]} />
      <Floor />
      <Arches />
      <Frames imageUrl="./kunstpalast.webp" position={[-1.2, -1, -3]} />
      <Frames imageUrl="./man.webp" position={[1.2, -1, -6]} />
    </group>
  );
};


export default FloorScene;