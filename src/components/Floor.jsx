import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useEffect } from "react";

const Floor = () => {
  const { nodes } = useGLTF("./models/floor.glb");
  const texture = useTexture("./models/floor-matcap.webp");
  const matcapMaterial = new THREE.MeshMatcapMaterial({
    matcap: texture,
    color: new THREE.Color().setHSL(0.78, 0.2, 0.7),
  });

  const numberOfFloors = 7;
  const spacing = 4;
  const startZ = 0;

  const instancedMeshRef = useRef();
  const tempObject = new THREE.Object3D();

  useEffect(() => {
    if (!instancedMeshRef.current) return;

    for (let i = 0; i < numberOfFloors; i++) {
      const z = startZ - i * spacing;
      const rotationY = i % 2 === 0 ? Math.PI / 2 : -Math.PI / 2;

      tempObject.position.set(0, -2, z);
      tempObject.rotation.set(0, rotationY, 0);
      tempObject.updateMatrix();
      instancedMeshRef.current.setMatrixAt(i, tempObject.matrix);
    }

    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  }, [numberOfFloors, spacing, startZ]);

  const geometry = nodes?.Scene?.children[0]?.geometry;

  if (!geometry) return null;

  return (
    <instancedMesh
      ref={instancedMeshRef}
      args={[geometry, matcapMaterial, numberOfFloors]}
      frustumCulled={false}
    />
  );
};

export default Floor;
