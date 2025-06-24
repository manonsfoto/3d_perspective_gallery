import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import photosVertexShader from "../shaders/photos/vertex.glsl";
import photosFragmentShader from "../shaders/photos/fragment.glsl";

const Photos = ({ imageUrl, position }) => {
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
        vertexShader={photosVertexShader}
        fragmentShader={photosFragmentShader}
        uniforms={{
          uTexture: { value: texture },
          uTime: { value: 0 },
        }}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
};

export default Photos;
