import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

function App() {
  const controls = useControls({
    fogColor: "#ffffff",
    fogNear: 2,
    fogFar: 5,
  });
  return (
    <>
      <Canvas>
        <fog
          attach="fog"
          args={[controls.fogColor, controls.fogNear, controls.fogFar]}
        />
        <Perf position="top-left" />
        <Experience />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
