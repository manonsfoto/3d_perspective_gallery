import Floor from "./Floor";
import Lights from "./Lights";
import { Environment } from "@react-three/drei";
const Experience = () => {
  return (
    <>
      <color attach="background" args={["#ffffff"]} />
      <Lights />
      <Floor />
    </>
  );
};

export default Experience;
