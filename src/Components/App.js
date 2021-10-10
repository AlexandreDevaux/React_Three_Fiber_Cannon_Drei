import React from "react";
import {Suspense} from "react";
import './App.css';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";
import {Physics} from "@react-three/cannon";
import Sphere from "./three_components/Sphere";
import Scene from "../Components/three_components/TextureScene"


function App() {
    return (
        <div className="App">
            <Canvas  camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
                <OrbitControls/>
                <Stars/>
                <ambientLight/>
                <directionalLight/>
                <Physics>
                    <Sphere position={[0,0,0]} color={"blue"} scale={1}/>
                    <Suspense fallback={null}>
                        <Scene position={[0,0,0]} />
                    </Suspense>
                </Physics>
            </Canvas>
        </div>
    );
}

export default App;
