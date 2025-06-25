import { Float, OrbitControls, ScrollControls } from "@react-three/drei";
import FloorScene from "./FloorScene";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Godray from "./Godray";

const Experience = () => {
  return (
    <>
      <EffectComposer>
        <Noise
          opacity={0.3}
          premultiply
          blendFunction={BlendFunction.OVERLAY}
        />
        <Godray />
      </EffectComposer>
      {/* <OrbitControls enableZoom={false} /> */}
      <fog attach="fog" args={["#ffffff", 3, 8]} />
      <ScrollControls pages={4} damping={0.5}>
        <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.5}>
          <FloorScene />
        </Float>
      </ScrollControls>
    </>
  );
};

export default Experience;
