import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Floor = () => {
  const floor = useGLTF("./models/floor.glb");
  const texture = useTexture("./models/floor-matcap.webp");
  const matcapMaterial = new THREE.MeshMatcapMaterial({
    matcap: texture,
  });

  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => {
        const z = index * 4;
        const rotationY = index % 2 === 0 ? Math.PI / 2 : -Math.PI / 2;

        return (
          <mesh
            key={index}
            geometry={floor.scene.children[0].geometry}
            rotation={[0, rotationY, 0]}
            position={[0, -2, -z]}
            material={matcapMaterial}
          ></mesh>
        );
      })}
    </>
  );
};

export default Floor;
