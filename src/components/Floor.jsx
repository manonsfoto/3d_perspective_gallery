import { useGLTF } from "@react-three/drei";

const Floor = () => {
  const floor = useGLTF("./floor.glb");
  const arch = useGLTF("./arch.glb");

  const numberOfArches = 15;
  const spacing = 1;
  const startZ = -7;

  return (
    <>
      <primitive object={floor.scene} />

      {Array.from({ length: numberOfArches }).map((_, index) => {
        const z = startZ + index * spacing;
        return (
          <primitive
            key={index}
            object={arch.scene.clone()}
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
