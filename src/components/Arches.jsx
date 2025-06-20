import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { useRef, useEffect } from "react";

const Arches = () => {
  const { nodes } = useGLTF("./models/arch.glb");
  const texture = useTexture("./models/floor-matcap.webp");
  const matcapMaterial = new THREE.MeshMatcapMaterial({ matcap: texture });

  const numberOfArches = 12;
  const spacing = 2;
  const startZ = 0;

  const instancedMeshRef = useRef();
  const tempObject = new THREE.Object3D();

 
  useEffect(() => {
    if (!instancedMeshRef.current) return;

    for (let i = 0; i < numberOfArches; i++) {
      const z = startZ + i * spacing;
      tempObject.position.set(0, 0, -z);
      tempObject.rotation.set(0, Math.PI / 2, 0);
      tempObject.updateMatrix();
      instancedMeshRef.current.setMatrixAt(i, tempObject.matrix);
    }

    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  }, [numberOfArches, spacing, startZ]);


  const geometry = nodes?.Scene?.children[0]?.geometry;

  if (!geometry) return null;

  return (
    <instancedMesh
      ref={instancedMeshRef}
      args={[geometry, matcapMaterial, numberOfArches]}
      frustumCulled={false}
    />
  );
};

export default Arches;
