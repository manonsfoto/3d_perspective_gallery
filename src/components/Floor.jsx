import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useEffect } from "react";

const Floor = () => {
  const floor = useGLTF("./floor.glb");
  const arch = useGLTF("./arch.glb");

  const numberOfArches = 15;
  const spacing = 1;
  const startZ = -7;

  const texture = useTexture("./floor-matcap.webp");
  const matcapMaterial = new THREE.MeshMatcapMaterial({
    matcap: texture,
   
  });

  useEffect(() => {
    if (floor.scene) {
      floor.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = matcapMaterial;
        }
      });
    }
  }, []);

  return (
    <>
      <primitive object={floor.scene} />
      {Array.from({ length: numberOfArches }).map((_, index) => {
        const z = startZ + index * spacing;
        const archClone = arch.scene.clone();

        archClone.traverse((child) => {
          if (child.isMesh) {
            child.material = matcapMaterial;
          }
        });

        return (
          <primitive
            key={index}
            object={archClone}
            rotation={[0, Math.PI / 2, 0]}
            scale={0.5}
            position={[0, 1, z]}
          />
        );
      })}
    </>
  );
};

export default Floor;
