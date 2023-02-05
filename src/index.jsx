import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'


const root = ReactDOM.createRoot(document.querySelector('#root'))

const isMobile = window.innerWidth <= 700

root.render(
    <Canvas
        camera={ {
            fov: 50,
            near: 0.1,
            far: 2000,
            position: isMobile ? [0, 1, 5.5] : [0, 1, 3.2]
        } }
    >
        <Experience />
    </Canvas>
)
