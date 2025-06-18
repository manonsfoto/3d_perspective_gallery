import { useGLTF, useTexture } from "@react-three/drei";
import CustomShaderMaterial from "three-custom-shader-material";
import floorVertexShader from "../shaders/floor/vertex.glsl";
import floorFragmentShader from "../shaders/floor/fragment.glsl";
import * as THREE from "three";

const Floor = () => {
  const floor = useGLTF("./floor.glb");
  const texture = useTexture("./floor-matcap.webp");
  const matcapMaterial = new THREE.MeshMatcapMaterial({
    matcap: texture,
  
  });
  console.log(floor);
  return (
    <>
      <mesh geometry={floor.scene.children[0].geometry}>
        <CustomShaderMaterial
          baseMaterial={matcapMaterial}
          vertexShader={floorVertexShader}
          fragmentShader={floorFragmentShader}
        />
      </mesh>
    </>
  );
};

export default Floor;
