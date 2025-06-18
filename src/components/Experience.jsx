import Floor from "./Floor";
import Lights from "./Lights";
import { Environment } from "@react-three/drei";
const Experience = () => {
  return (
    <>
      <color attach="background" args={[0.9, 0.9, 0.9, 1]} />
      <Lights />
      <Floor />
    </>
  );
};

export default Experience;
