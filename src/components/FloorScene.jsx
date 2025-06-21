import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import Floor from "./Floor";
import Arches from "./Arches";
import Frames from "./Frames";
import { images } from "../utils/util";

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
      {images.map((image, index) => {
        const side = index % 2 === 0 ? -1 : 1;
        const x = side * (1.25 + Math.random() * 1.25);
        const y = -0.5 + (Math.random() - 0.5) * 0.5;
        const z = -8 - index * 1.7;

        return <Frames key={image} imageUrl={image} position={[x, y, z]} />;
      })}
    </group>
  );
};

export default FloorScene;
