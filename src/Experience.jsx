import React, { Suspense, useState, useRef  } from 'react'
import { Cloud, Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Text3D, Center, useMatcapTexture, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'
import { MathUtils } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

/* import { EffectComposer, Bloom } from '@react-three/postprocessing'
 */



/* const material = new THREE.MeshStandardMaterial()
const geometries = [
    { geometry: new THREE.TetrahedronBufferGeometry(2) },
    { geometry: new THREE.CylinderBufferGeometry(0.8, 0.8, 2, 32) },
    { geometry: new THREE.ConeGeometry(1.1, 1.7, 32) },
    { geometry: new THREE.SphereBufferGeometry(1.5, 32, 32) },
    { geometry: new THREE.IcosahedronBufferGeometry(2) },
    { geometry: new THREE.TorusBufferGeometry(1.1, 0.35, 16, 32) },
    { geometry: new THREE.OctahedronGeometry(2) },
    { geometry: new THREE.SphereBufferGeometry(1.5, 32, 32) },
    { geometry: new THREE.BoxBufferGeometry(2.5, 2.5, 2.5) }
  ]

function Geometries() {
    const n = 40
    const randProps = useMemo(() => Array.from({ length: n }, () => geometries[Math.floor(Math.random() * geometries.length)]), [])
    return randProps.map((prop) => {
      return (
        <Float>
          <mesh
            scale={MathUtils.randFloat(0.05, 0.09)}
            position={[MathUtils.randFloat(-8, 8), MathUtils.randFloat(0, 4), MathUtils.randFloat(-8, -2)]}
            geometry={prop.geometry}
            material={material}
          />
        </Float>
      )
    })
  } */


export default function Experience() {
    const computer = useGLTF('./ipad.gltf')   
    
    const [currentWebsite, setCurrentWebsite] = useState("https://exo-vision.web.app/");
    const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);
    const [ matcapTexture ] = useMatcapTexture('17395A_7EBCC7_4D8B9F_65A1B5', 256)


    const handleButtonClick = (website) => {
        setCurrentWebsite(website);
    }



    return <>
        <color args={ [ '#060606' ] } attach="background" />


        
        <PresentationControls
            global
            rotation={ [ 0, 0, 0 ] }
            polar={ [ - 0.1, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            cameraPosition={cameraPosition}
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={ 0.4 } >  
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#ffffff' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />

                <primitive
                    object={ computer.scene }
                    position-y={ - 1.2 }
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.50, - 1.4 ] }
                        rotation-x={ - 0.256 }
                    >
                        <iframe src={currentWebsite} />
                    </Html>
                </primitive>

             
               

               

            </Float>
        </PresentationControls>


        <Text
                        font="./RussoOne-Regular.ttf"
                        fontSize={ .15 }
                    position={ [ -1, -1.2, 0 ] }
                    rotation-y={ 0 }
                        maxWidth={ 4 }
                        onClick={() => handleButtonClick("https://askmybook.com/")}
                    >
                        Q&A
        </Text>

        <Text
                    font="./RussoOne-Regular.ttf"
                    fontSize={ .15 }
                    position={ [ 0, -1.2, 0 ] }
                    rotation-y={ 0 }
                    maxWidth={ 4 }
                    onClick={() => handleButtonClick("https://exo-vision.web.app/")}
                    >
                        PRESENTACIÓN
        </Text>

        <Text
                    font="./RussoOne-Regular.ttf"
                    fontSize={ .15 }
                    position={ [ 1, -1.2, 0 ] }
                    rotation-y={ 0 }
                    maxWidth={ 4 }
                    onClick={() => handleButtonClick("https://exo-vision.web.app/")}
                    >
                        BLOG
        </Text>
                   

        <Text3D
                font="/Inter_Bold.json"
                position={ [ -1.2, -1, 0 ] }
                rotation={ [ -0.5, 0, 0 ] }
                size={ 0.2 }
                height={ 0.1 }
                curveSegments={ 25 }
                bevelEnabled
                bevelThickness={ 0.005 }
                bevelSize={ 0.005 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
                
                >
                RODRIGO GARCIA
                <meshMatcapMaterial matcap={ matcapTexture } />
        </Text3D>

        {/* <Cloud color={ '#c90076' } position={[4, 4, -25]} speed={0.2} opacity={0.1} />
        <Cloud position={[-4, 4, -25]} speed={0.2} opacity={0.1} />
        <Cloud position={[-8, 4, -25]} speed={0.2} opacity={0.1} />
        <Cloud position={[8, 4, -25]} speed={0.2} opacity={0.1} />
        <Cloud position={[12, 4, -25]} speed={0.2} opacity={0.1} />
        <Cloud position={[-12, 4, -25]} speed={0.2} opacity={0.1} />
        <Cloud position={[16, 4, -25]} speed={0.2} opacity={0.1} /> */}



{/*         <Geometries />
 */}
        {/* <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer> */}

        <Sparkles
            size={ 6 }
                    scale={ [ 20, 1.5, 4 ] }
                    position-z={ -6 }
                    speed={ 0.5 }
            count={ 200 }
            color={ '#14dbfd' }
        />

        <pointLight

            intensity={ 3 }
                    color={ '#ffffff' }
                    rotation={ [ 0, 0, 0 ] }
            position={ [ 0, -1, 0 ] }
        />

                 


        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 15 }
            blur={ 2.4 }
        />

</>

}