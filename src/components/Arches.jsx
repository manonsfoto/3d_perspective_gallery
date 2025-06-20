import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
const Arches = () => {
  const arch = useGLTF("./models/arch.glb");

  const numberOfArches = 12;
  const spacing = 2;
  const startZ = 0;

  const texture = useTexture("./models/floor-matcap.webp");
  const matcapMaterial = new THREE.MeshMatcapMaterial({
    matcap: texture,
  });
  return (
    <>
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
            position={[0, 0, -z]}
          />
        );
      })}
    </>
  );
};

export default Arches;
