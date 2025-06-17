import { Environment } from "@react-three/drei";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment
        preset="sunset"
        background={true}
        blur={0.5}
        backgroundBlurriness={0.5}
        backgroundIntensity={1.5}
      ></Environment>
    </>
  );
};

export default Lights;
