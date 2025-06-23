import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import framesVertexShader from "../shaders/frames/vertex.glsl";
import framesFragmentShader from "../shaders/frames/fragment.glsl";

const Frames = ({ imageUrl, position }) => {
  const shaderRef = useRef();
  const texture = useTexture(imageUrl);

  useFrame(({ clock }) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh position={position} scale={0.5}>
      <planeGeometry args={[3, 4, 10, 10]} />
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
