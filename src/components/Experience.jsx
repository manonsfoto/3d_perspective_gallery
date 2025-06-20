import Floor from "./Floor";
import Arches from "./Arches";
import Frames from "./Frames";
const Experience = () => {
  return (
    <>
      <color attach="background" args={["#ffffff"]} />
      <Floor />
      <Arches />
      <Frames imageUrl="./kunstpalast.webp" position={[-1.2, 0, -3]} />
      <Frames imageUrl="./man.webp" position={[1.2, 0, -6]} />
    </>
  );
};

export default Experience;
