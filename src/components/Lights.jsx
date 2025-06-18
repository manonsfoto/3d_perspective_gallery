import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import * as THREE from "three";

const Lights = () => {
  const directionalLightRef = useRef();

  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "black");

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        ref={directionalLightRef}
        position={[-2, 8, 2]}
        intensity={1}
      />
    </>
  );
};

export default Lights;
