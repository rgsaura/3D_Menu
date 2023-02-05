import './style.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { useXR } from '@react-three/xr';
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const isMobile = window.innerWidth <= 700

const XRButton = ({ enabled }) => {
    const { enterXR, supported } = useXR();
    const [isEnabled, setEnabled] = useState(enabled);
  
    return (
      <>
        {supported ? (
          <button onClick={() => setEnabled(!isEnabled)}>
            {isEnabled ? 'Exit VR' : 'Enter VR'}
          </button>
        ) : (
          <p>WebXR not supported</p>
        )}
        {isEnabled && (
          <>
            <button onClick={enterXR}>Enter VR</button>
          </>
        )}
      </>
    );
};

const App = () => {
    const [enabled, setEnabled] = useState(false);
  
    return (
      <>
        {enabled && (
          <Canvas
            camera={ {
                fov: 50,
                near: 0.1,
                far: 2000,
                position: isMobile ? [0, 1, 7] : [0, 1, 3.2]
            } }
          >
            <XRButton enabled={enabled} />
            <Experience />
          </Canvas>
        )}
      </>
    );
  };
  
  root.render(<App />)
