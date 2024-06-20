import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useCallback, useRef, useState } from "react";
import Interface from "./Interface";
import Gallery from "../Gallery/Gallery";

const XrOverlayContainer = () => {
  const [overlayContent, setOverlayContent] = useState(null);

  let interfaceRef = useCallback((node) => {
    if (node !== null) {
      setOverlayContent(node);
    }
  });

  return (
    <>
        <ARButton
          className="ar-button"
          sessionInit={{
            requiredFeatures: ["hit-test"],
            optionalFeatures: ['dom-overlay'],
            domOverlay: {root: overlayContent },
          }}
        />
        <Canvas camera = {{ position: [4, 0, -30]}}>
          <XR>
            <Gallery />
          </XR>
        </Canvas>
        <Interface ref={interfaceRef} />
    </>
  );
};

export default XrOverlayContainer;