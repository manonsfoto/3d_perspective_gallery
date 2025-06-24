import { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { Billboard, shaderMaterial, Text } from "@react-three/drei";
import * as THREE from "three";
import { fontUrl } from "../utils/util";

const Logo = () => {
  const textRef = useRef();

  useFrame((state) => {
    if (textRef.current) {
      const cameraDirection = state.camera.getWorldDirection(
        new THREE.Vector3()
      );
      textRef.current.position
        .copy(state.camera.position)
        .add(cameraDirection.multiplyScalar(2));
    }
  });

  const TextMaterial = shaderMaterial(
    {
      uTime: 0,
      uColor: new THREE.Color(0x000000),
    },
    `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    `
      uniform float uTime;
      uniform vec3 uColor;
      varying vec2 vUv;
      
      void main() {
        gl_FragColor = vec4(uColor, 1.0);
      }
    `
  );

  extend({ TextMaterial });

  return (
    <Billboard ref={textRef} scale={0.5}>
      <Text position-y={0.6} fontSize={0.35} font={fontUrl.alex}>
        <textMaterial />
        Selected Photos by
      </Text>
      <Text position-y={0} fontSize={0.6} font={fontUrl.bebas}>
        <textMaterial />
        MINYEONG JEONG
      </Text>
      <Text position-y={-0.5} fontSize={0.2} font={fontUrl.montserrat}>
        <textMaterial />
        Urban Aesthetic
      </Text>
    </Billboard>
  );
};

export default Logo;
