import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import { Perf } from "r3f-perf"
import { OrbitControls } from "@react-three/drei"
function App() {
 

  return (
    <>
  <Canvas>
    <Perf position="top-left" />
    <Experience />
    <OrbitControls />
  </Canvas>
    </>
  )
}

export default App
