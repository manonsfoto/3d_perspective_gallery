import { useFrame } from "@react-three/fiber";
import { OrbitControls, useScroll, ScrollControls } from "@react-three/drei";
import { useRef } from "react";
import Floor from "./Floor";
import Arches from "./Arches";
import Frames from "./Frames";

const Scene = () => {
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

const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <fog attach="fog" args={["#ffffff", 4, 10]} />
      <ScrollControls pages={2} damping={0.5}>
        <Scene />
      </ScrollControls>
    </>
  );
};

export default Experience;
