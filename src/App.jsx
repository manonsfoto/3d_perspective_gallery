import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Perf } from "r3f-perf";

function App() {
  return (
    <>
      <Canvas flat>
        {/* <Perf position="top-left" /> */}
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
