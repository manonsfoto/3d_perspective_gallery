import { useGLTF } from "@react-three/drei";

import floorVertexShader from "../shaders/floor/vertex.glsl";
import floorFragmentShader from "../shaders/floor/fragment.glsl";

const Floor = () => {
  const floor = useGLTF("./floor.glb");

  console.log(floor);

  return (
    <>
      <mesh geometry={floor.scene.children[0].geometry}>
        <shaderMaterial
          vertexShader={floorVertexShader}
          fragmentShader={floorFragmentShader}
              />
      </mesh>
    </>
  );
};

export default Floor;
