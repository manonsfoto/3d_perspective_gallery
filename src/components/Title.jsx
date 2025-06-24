import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import * as THREE from "three";
import { fontUrl } from "../utils/util";

const Title = () => {
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

  return (
    <Billboard ref={textRef} scale={0.5}>
      <Text
        position-y={0.6}
        fontSize={0.35}
        font={fontUrl.averia}
        color={"#000000"}
      >
        Selected Photos by
      </Text>
      <Text
        position-y={0}
        fontSize={0.6}
        font={fontUrl.bebas}
        color={"#000000"}
      >
        MINYEONG JEONG
      </Text>
      <Text
        position-y={-0.5}
        fontSize={0.2}
        font={fontUrl.montserrat}
        color={"#000000"}
      >
        Urban Aesthetic
      </Text>
    </Billboard>
  );
};

export default Title;
