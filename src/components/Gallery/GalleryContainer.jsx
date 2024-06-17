import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import Gallery from "./Gallery";

const GalleryContainer = () => {

  return (
    <>
      <ARButton 
      sessionInit={{
        requiredFeatures: ["hit-test"],
      }} 
      />
      <Canvas  camera = {{ position: [4, 0, -30]}}>
        <XR>
            {/* <Gallery/> */}
        </XR>
      </Canvas>
    </>
  )
}

export default GalleryContainer