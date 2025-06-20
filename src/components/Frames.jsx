import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import framesVertexShader from "../shaders/frames/vertex.glsl";
import framesFragmentShader from "../shaders/frames/fragment.glsl";

const Frames = () => {
  const shaderRef = useRef();
  const texture = useTexture("./kunstpalast.webp");

  useFrame(({ clock }) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[1, 1, 20, 20]} />
      <shaderMaterial
        ref={shaderRef}
        vertexShader={framesVertexShader}
        fragmentShader={framesFragmentShader}
        uniforms={{
          uTexture: { value: texture },
          uTime: { value: 0 },
        }}
      />
    </mesh>
  );
};

export default Frames;
