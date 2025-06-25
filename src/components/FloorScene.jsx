import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useMemo } from "react";
import Floor from "./Floor";
import Arches from "./Arches";
import Photos from "./Photos";
import { images } from "../utils/util";
import Title from "./Title";

const FloorScene = () => {
  const data = useScroll();

   const photoElements = useMemo(() => {
    return images.map((image, index) => {
      const side = index % 2 === 0 ? -1 : 1;
      const x = side * (1.25 + Math.random() * 1.25);
      const y = -0.5 - Math.random() * 0.2;
      const z = -8 - index * 1.7;
      return <Photos key={image} imageUrl={image} position={[x, y, z]} />;
    });
  }, []);

  useFrame((state) => {
    const offset = data.offset;
    state.camera.position.y = -1;
    const targetZ = offset * -20;
    if (Math.abs(targetZ - state.camera.position.z) > 0.001) {
      state.camera.position.z += (targetZ - state.camera.position.z) * 0.1;
      state.camera.lookAt(0, -1, state.camera.position.z - 5);
    }
  });

  return (
    <group>
      <color attach="background" args={["#ffffff"]} />
      <group name="background-meshes">
        <Floor />
        <Arches />
        {photoElements}
      </group>
      <Title />
    </group>
  );
};

export default FloorScene;
