import { OrbitControls, ScrollControls } from "@react-three/drei";
import FloorScene from "./FloorScene";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
const Experience = () => {
  return (
    <>
      <EffectComposer>
        <Noise
          opacity={0.3}
          premultiply
          blendFunction={BlendFunction.OVERLAY}
        />
      </EffectComposer>
      <OrbitControls enableZoom={false} />
      <fog attach="fog" args={["#ffffff", 4, 10]} />
      <ScrollControls pages={2} damping={0.5}>
        <FloorScene />
      </ScrollControls>
    </>
  );
};

export default Experience;
