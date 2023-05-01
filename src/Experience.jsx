import React, { Suspense, useState, useRef  } from 'react'
import { Cloud, Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Text3D, Center, useMatcapTexture, Sparkles, Image } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'
import { MathUtils } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { ControlledInput } from './ControlledInput'


export default function Experience() {


    const computer = useGLTF('./ipad.gltf')   
    
    const [currentWebsite, setCurrentWebsite] = useState("https://inicio-alpha.vercel.app");
    const [ matcapTexture ] = useMatcapTexture('17395A_7EBCC7_4D8B9F_65A1B5', 256)


    const handleButtonClick = (website) => {
        setCurrentWebsite(website);
    }

    function Input(props) {
        const [text, set] = useState('hello world ...')
        return (
          <group {...props}>
            <Text position={[-1.2, -0.022, 0]} anchorX="0px" font="/Inter-Regular.woff" fontSize={0.335} letterSpacing={-0.0}>
              {text}
              <meshStandardMaterial color="black" />
            </Text>
            <mesh position={[0, -0.022, 0]} scale={[2.5, 0.48, 1]}>
              <planeGeometry />
              <meshBasicMaterial transparent opacity={0.3} depthWrite={false} />
            </mesh>
            <Html transform>
              <ControlledInput type={text} onChange={(e) => set(e.target.value)} value={text} />
            </Html>
          </group>
        )
      }



    return <>
        <color args={ [ '#000000' ] } attach="background" />
        
        <PresentationControls
            global
            rotation={ [ 0, 0, 0 ] }
            polar={ [ - 0.1, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            cameraPosition={ [ 0, 0, 3 ] }
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
                        <iframe src={currentWebsite} frameborder="0" allow="xr-spatial-tracking" allowfullscreen=""/>
                    </Html> 
                </primitive>

             
               

               

            </Float>
        </PresentationControls>

        {/* <Text
                        font="./RussoOne-Regular.ttf"
                        fontSize={ .10 }
                    position={ [ -1, -1.25, 0 ] }
                    rotation={ [ -0.5, 0, 0 ] }
                    maxWidth={ 4 }
                        onClick={() => handleButtonClick("https://tockify.com/rodrigo.garcia/monthly")}
                    >
                        EVENTOS
        </Text> */}

        <Text
                        font="./RussoOne-Regular.ttf"
                        fontSize={ .10 }
                    position={ [ -.7, -1.25, 0 ] }
                    rotation={ [ -0.5, 0, 0 ] }
                    maxWidth={ 4 }
                        onClick={() => handleButtonClick("https://rgsaura.github.io/tienda-wordpress/toolkits/")}
                    >
                        UTILIDADES
        </Text>



        <Image
        url="./pilar.png"
        scale={.25}
        transparent
        position={ [ 0, -1.25, 0 ] }
        rotation={ [ -0.5, 0, 0 ] }
        onClick={() => handleButtonClick("https://inicio-alpha.vercel.app")}
        ></Image>

        {/* <Image
        url="./gafas.png"
        scale={.15}
        transparent
        position={ [ 0, -1.4, 0.3 ] }
        rotation={ [ -0.5, 0, 0 ] }
        onClick={() => handleButtonClick("https://superb-marten.super.site/")}
        ></Image> */}

        <Image
        url="./menu.png"
        scale={2}
        transparent
        position={ [ 0, -1.20, -0.1 ] }
        rotation={ [ -0.5, 0, 0 ] }
        ></Image>

        {/* <primitive
            object={ computer.scene }
            position-y={ - 1.2 }>
             <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 0, - 1.4 ] }
                        rotation-x={ - 0.256 }
                    >
                        <iframe src="./video.mp4" controls="false" autoplay="true" muted/>
                    </Html> 
        </primitive> */}

       {/*  <Image
        url="./menu.png"
        scale={2}
        transparent
        position={ [ 0, 2, -0.1 ] }
        rotation={ [ -0.5, 0, 0 ] }
        ></Image>

        <Image
        url="./menu.png"
        scale={2}
        transparent
        position={ [ 0, -2.5, -0.1 ] }
        rotation={ [ -0.5, 0, 0 ] }
        ></Image> */}


        <Text
                    font="./RussoOne-Regular.ttf"
                    fontSize={ .10 }
                    position={ [ .45, -1.25, 0 ] }
                    rotation={ [ -0.5, 0, 0 ] }
                    maxWidth={ 4 }
                    onClick={() => handleButtonClick("https://rgsaura.github.io/rgsaura-virtualshowroom/")}
                    >
                        MUNDO
        </Text>

        {/* <Text
                    font="./RussoOne-Regular.ttf"
                    fontSize={ .10 }
                    position={ [ 1.1, -1.25, 0 ] }
                    rotation={ [ -0.5, 0, 0 ] }
                    maxWidth={ 4 }
                    onClick={() => handleButtonClick("https://rgsaura.github.io/tienda-wordpress/toolkits/")}
                    >
                        UTILIDADES
        </Text> */}

        <Text
                    font="./RussoOne-Regular.ttf"
                    fontSize={ .05 }
                    position={ [ 0, -2, 1 ] }
                    rotation={ [ -0.5, 0, 0 ] }
                    maxWidth={ 4 }
                    onClick={() => handleButtonClick("https://rgsaura.github.io/tienda-wordpress/toolkits/")}
                    color="#444444"
                    >
                        ¡PRUEBA DESDE EL ORDENADOR!
        </Text>
                   

        <Text3D
                font="/Inter_Bold.json"
                position={ [ -0.68, -1, 0 ] }
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
                RGSAURA
                <meshMatcapMaterial matcap={ matcapTexture } />
        </Text3D>

        {/* <Cloud color={ '#c90076' } position={[4, 4, -25]} speed={0.2} opacity={0.1} />
        <Cloud position={[-4, 4, -25]} speed={0.2} opacity={0.1} />
        <Cloud position={[-8, 4, -25]} speed={0.2} opacity={0.1} />
        <Cloud position={[8, 4, -25]} speed={0.2} opacity={0.1} />
        <Cloud position={[12, 4, -25]} speed={0.2} opacity={0.1} />
        <Cloud position={[-12, 4, -25]} speed={0.2} opacity={0.1} />
        <Cloud position={[16, 4, -25]} speed={0.2} opacity={0.1} /> */}



        <Sparkles
            size={ 6 }
                    scale={ [ 20, 1.5, 4 ] }
                    position-z={ -6 }
                    speed={ 0.5 }
            count={ 200 }
            color={ '#14dbfd' }
        />

        <Sparkles
            size={ 3 }
                    scale={ [ 7, 2, 2 ] }
                    position-z={ -6 }
                    position-y={ 3.5 }
                    speed={ 0.5 }
            count={ 100 }
            color={ '#07abc7' }
        />

        <Sparkles
            size={ 2 }
                    scale={ [ 3, 1, 2 ] }
                    position-z={ 0 }
                    position-y={ -3.2 }
                    speed={ 0.5 }
            count={ 100 }
            color={ '#07abc7' }
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