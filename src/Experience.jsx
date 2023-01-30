import React, { useState } from 'react'
import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'

export default function Experience() {
    const computer = useGLTF('./ipad.gltf')    
    const [currentWebsite, setCurrentWebsite] = useState("https://exo-vision.web.app/");

    const handleButtonClick = (website) => {
        setCurrentWebsite(website);
    }
    
    return <>
        <color args={ [ '#003c5f' ] } attach="background" />

        <Environment preset="city" />
        
        <PresentationControls
            global
            rotation={ [ 0, 0, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
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

                <Text
                    font="./RussoOne-Regular.ttf"
                    fontSize={ .15 }
                    position={ [ -0.5, -1.7, 0 ] }
                    rotation-y={ 0 }
                    maxWidth={ 4 }
                    onClick={() => handleButtonClick("https://exo-vision.web.app/")}
                >
                    Button 1
                </Text>

                <Text
                    font="./RussoOne-Regular.ttf"
                    fontSize={ .15 }
                    position={ [ 0.5, -1.7, 0 ] }
                    rotation-y={ 0 }
                    maxWidth={ 4 }
                    onClick={() => handleButtonClick("https://www.google.com/")}
                >
                    Button 2
                </Text>

                <Text
                    font="./RussoOne-Regular.ttf"
                    fontSize={ .3 }
                    position={ [ 0, -1, 0 ] }
                    rotation-y={ 0 }
                    maxWidth={ 4 }
                >
                    Rodrigo Garcia
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}