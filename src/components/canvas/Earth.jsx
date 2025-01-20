// 
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        style={{ width: '100%', height: '100vh' }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
      <br />
      <br />
      <div style={{ marginTop: '20px' }}>
        <a
          href="https://amber-lilla-52.tiiny.site"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '2.5rem', // 2xl font size equivalent
            color: 'violet', // Initial color (blue)
            textDecoration: 'none',
            transition: 'color 0.3s ease', // Smooth color transition
          }}
          onMouseEnter={(e) => e.target.style.color = 'gray'} // Hover color change
          onMouseLeave={(e) => e.target.style.color = 'violet'} // Reset color
        >
          View My Resume
        </a>
      </div>
    </div>
  );
};

export default EarthCanvas;
